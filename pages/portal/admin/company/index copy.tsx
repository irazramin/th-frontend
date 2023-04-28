import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus,} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {useEffect, useRef, useState} from "react";
import DeleteModal from "../../../../components/modals/DeleteModal";

const Company = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [viewDataModalOpen, setViewDataModalOpen] = useState(false);
    const [data, setData] = useState(null);
    const modalRef = useRef(null);

    const [itemId, setItemId] = useState('');
    const url = `http://localhost:3033/api/v1/company/`;

    const dispatch = useDispatch<AppDispatch>();

    const {isLoading, apiResponse, error} = useSelector(
        (state: RootState) => state.getApi
    );

    const {deleteIsLoading, deleteApiResponse, deleteError} = useSelector(
        (state: RootState) => state.deleteApi
    );

    useEffect(() => {
        setData(null);
    }, [apiResponse]);

    const tableProps = {
        id: "companyList",
        store: "companyList",
        headers: [
            {id: 1, name: "ID", storable: false},
            {id: 2, name: "NAME", storable: false},
            {id: 3, name: "EMAIL", storable: false},
            {id: 4, name: "PHONE", storable: false},
            {id: 5, name: "WEBSITE", storable: false},
        ],
        meta: null
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
                    <Datatable {...tableProps}>
                        {apiResponse?.data?.map((value: any) => {
                            return (
                                <tr className="datatable-row" key={value._id}>
                                    <td>{value._id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>
                                        <a href={value.website} target="_blank">
                                            {value.website ? value.website : "-"}
                                        </a>
                                    </td>
                                    <td>
                                        <div className="action-btns">
                                            <Link href={`company/${value._id}/edit`} key={value._id} passHref>
                                                <button className="action-btn">
                                                    <FontAwesomeIcon icon={faPen}/>
                                                </button>
                                            </Link>
                                            <Link href={`company/${value._id}`} key={value._id} passHref>
                                                <button className="action-btn">
                                                    <FontAwesomeIcon icon={faEye}/>
                                                </button>
                                            </Link>
                                            {/* <button
                        className="action-btn"
                        onClick={() => deleteTableData(value._id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button> */}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </Datatable>

                    <DeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalRef={modalRef} itemId={itemId}/>

                    {/* <ViewDataModal modalOpen={viewDataModalOpen} setModalOpen={setViewDataModalOpen} modalRef={modalRef} itemId={itemId} {...tableProps}/> */}
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
};

export default Company;
