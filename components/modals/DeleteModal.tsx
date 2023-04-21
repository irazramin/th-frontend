import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Modal from "react-responsive-modal";
import { deleteFetchApi } from "../../features/deleteApiSlice";
import { getFetchApi } from "../../features/getApiSlice";
import { AppDispatch } from "../../store";

const DeleteModal = ({ setModalOpen, modalOpen, modalRef, itemId }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteFetchApi(itemId))
    toast("Delete successfully", { icon: "✅" });
    setModalOpen(false)
  };


  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      center
      ref={modalRef}
    >
      <div className="modal">
        <img src="/images/remove.png" alt="" />
        <h2>Are you sure?</h2>
        <p>
          Do you want to delete these records? <br /> This process cannot be
          undone.
        </p>
        <div>
          <button className="cancel" onClick={() => setModalOpen(false)}>
            cancel
          </button>
          <button className="delete" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
