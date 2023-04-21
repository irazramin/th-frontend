import { AdminPortalLayout } from "../../../../layouts";
import Link from "next/link";
import { ButtonGreenSm } from "../../../../components/buttons";
import {
  faEye,
  faPen,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { DefaultCard, TitleCard } from "../../../../components/cards";
import { Datatable } from "../../../../components/tables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { useEffect, useRef, useState } from "react";
import DeleteModal from "../../../../components/modals/DeleteModal";
import ToastMessage from "../../../../components/toast/ToastMessage";
import { toast } from "react-hot-toast";
import ViewDataModal from "../../../../components/modals/ViewData";
import { getFetchApi } from "../../../../features/getApiSlice";

const Company = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const tableProps = {
    id: "companyList",
    store: "companyList",
    headers: [
      { id: 1, name: "ID", storable: false },
      { id: 2, name: "NAME", storable: false },
      { id: 3, name: "EMAIL", storable: false },
      { id: 4, name: "PHONE", storable: false },
      { id: 5, name: "WEBSITE", storable: false },
    ],
    meta: null
  };

  const [params, setParams] = useState({page: 1, limit: 10, search: ""});

  const {companyList = {data: [], meta: null}} = useSelector(
    (state: RootState) => state.getApi
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [params.limit, params.page, params.search]);

  const fetchData = () => {
    dispatch(getFetchApi({ 
      url: `http://localhost:3033/api/v1/company/list`, 
      params: params, 
      storeName: 'companyList',
      defaultValue: []
    }));
  };

  return (
    <>
      <AdminPortalLayout>
        <TitleCard title="Company">
          <Link href={router.pathname + "/add"}>
            <ButtonGreenSm icon={faPlus}>Add Company</ButtonGreenSm>
          </Link>
        </TitleCard>
        <DefaultCard>
          <Datatable {...tableProps} 
            meta={companyList.meta} 
            onChangeLimit={(value: any) => setParams({...params, limit: value})}
            onChangePage={(value: any) => setParams({...params, page: value})}
            >
            {companyList?.data?.length > 0 && companyList.data.map((company: any, companyIndex: number) => (
              <tr key={companyIndex}>
                <td>{((params.page - 1) * params.limit) + companyIndex + 1}</td>
                <td>{company.name}</td>
                <td>{company.email}</td>
                <td>{company.phone}</td>
                <td>{company.website}</td>
                <td>
                  <div className="action-btns">
                    <Link href={`company/${company._id}`} key={`show${companyIndex}`} passHref >
                      <button className="action-btn"  >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </Link>
                    <Link href={`company/${company._id}/edit`} key={`edit${companyIndex}`} passHref>
                      <button className="action-btn">
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </Datatable> 
        </DefaultCard>
      </AdminPortalLayout>
    </>
  );
};

export default Company;
