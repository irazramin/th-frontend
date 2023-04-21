import { AdminPortalLayout } from "../../../../../layouts";
import {
  ButtonGreenMd,
  ButtonGreenSm,
} from "../../../../../components/buttons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { DefaultCard, TitleCard } from "../../../../../components/cards";
import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getFetchApi } from "../../../../../features/getApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { fetchApi } from "../../../../../features/postApiSlice";
import { toast } from "react-hot-toast";
import ToastMessage from "../../../../../components/toast/ToastMessage";
import { getByIdFetchApi } from "../../../../../features/getApiByIdSlice";

interface IFormInput {
  name: String;
  email: String;
  phone: String;
  website: String;
}

const Add = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ criteriaMode: "all" });

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, apiResponse, error } = useSelector(
    (state: RootState) => state.getApiById
  );

  const { id } = router.query;

  useEffect(() => {
    dispatch(
      getByIdFetchApi({
        url: "http://localhost:3033/api/v1/company/",
        payload: id,
      })
    );
  }, []);

  return (
    <>
      <AdminPortalLayout>
        <TitleCard title={apiResponse?.data?.name}>
          <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
            Back
          </ButtonGreenSm>
        </TitleCard>
        <DefaultCard>
          <div className="row">
            <div className="col-md-8 offset-2">
              <div className="datatable-wrapper">
                <table className="datatable">
                  <tbody>
                    <tr className="datatable-row">
                      <td><b>Name</b></td>
                      <td>{apiResponse?.data?.name}</td>
                    </tr>
                    <tr className="datatable-row">
                      <td><b>Email</b></td>
                      <td>{apiResponse?.data?.email}</td>
                    </tr>
                    <tr className="datatable-row">
                      <td><b>Phone</b></td>
                      <td>{apiResponse?.data?.phone}</td>
                    </tr>
                    <tr className="datatable-row">
                      <td><b>Website</b></td>
                      <td>{apiResponse?.data?.website}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DefaultCard>
      </AdminPortalLayout>
    </>
  );
};

export default Add;
