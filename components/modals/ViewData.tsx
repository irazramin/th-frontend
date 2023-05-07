import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "react-responsive-modal";
import { deleteFetchApi } from "../../slices/deleteApiSlice";
import  { getByIdFetchApi } from "../../slices/getApiByIdSlice";
import { AppDispatch, RootState } from "../../store";

const ViewDataModal = ({
  setModalOpen,
  modalOpen,
  modalRef,
  itemId,
  headers,
}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, apiResponse, error } = useSelector(
    (state: RootState) => state.getApiById
  );

  console.log(itemId);

  useEffect(() => {
    dispatch(
      getByIdFetchApi({
        url: "http://localhost:3033/api/v1/company/",
        payload: itemId,
      })
    );
  }, []);

  console.log(apiResponse);

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      center
      ref={modalRef}
    >
      <div className="modal">
        <div className="datatable-wrapper">
          <table className="datatable">
            <thead>
              <tr>
                {headers.map((header: any, headerIndex: any) => (
                  <th key={headerIndex}>{header.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="datatable-row">
                <td>{apiResponse?.data?._id}</td>
                <td>{apiResponse?.data?.name}</td>
                <td>{apiResponse?.data?.email}</td>
                <td>{apiResponse?.data?.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default ViewDataModal;
