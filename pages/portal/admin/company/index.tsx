import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {useEffect} from "react";
import {getFetchApi} from "../../../../features/getApiSlice";
import {deleteFetchApi} from "../../../../features/deleteApiSlice";

const Company = () => {
    const router = useRouter();

    const dispatch = useDispatch<AppDispatch>();

    const {isLoading, apiResponse, error} = useSelector(((state: RootState) => state.getApi))
    const {deleteIsLoading, deleteApiResponse, deleteError} = useSelector(((state: RootState) => state.deleteApi))

    useEffect(() =>{
        dispatch(getFetchApi());
    }, [])

    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'NAME', storable: false},
            {id: 3, name: 'EMAIL', storable: false},
            {id: 4, name: 'PHONE', storable: false},
            {id: 5, name: 'WEBSITE', storable: false},
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const handleDtOnCheckAll = (e: any) => {
        alert('Check all clicked')
    }

    const handleDtOnCheck = (e: any) => {
        alert('Check clicked')
    }

    const deleteTableData =( id: any ) => {
        dispatch(deleteFetchApi(id))
        console.log(deleteApiResponse)
    }

    const tableData = [
        {
            id: 1,
            companyName: "Brain Station 23",
            email: "nl@brainstation-23.com",
            phone: "01404-055220",
            website: "https://brainstation-23.com/"
        },
        {
            id: 2,
            companyName: "Flyte Solutions",
            email: "info@flytesolutions.com",
            phone: "01793-532035",
            website: "https://flytesolutions.com/"
        },
        {
            id: 3,
            companyName: "Tiger IT Bangladesh Limited",
            email: "info@tigerit.com",
            phone: "+88 02 8826739",
            website: "https://www.tigerit.com/"
        },
        {
            id: 4,
            companyName: "Cefalo Bangladesh Ltd.",
            email: "mail@cefalo.com",
            phone: "01790-233256",
            website: "https://www.cefalo.com/"
        },
        {
            id: 5,
            companyName: "Enosis Solutions",
            email: "info@enosisbd.com",
            phone: "+880 2 883 6411",
            website: "https://www.enosisbd.com/"
        },
        {
            id: 6,
            companyName: "Rexoit",
            email: "info@rexoit.com",
            phone: "+880 1888 042371",
            website: "https://www.rexoit.com/"
        },
        {
            id: 7,
            companyName: "Nano IT World",
            email: "info@nanoitworld.com ",
            phone: " 01715-147425",
            website: "https://www.nanoitworld.com/"
        },
        {
            id: 8,
            companyName: "Arena Phone Bd Ltd",
            email: "bizdev@arena.com.bd",
            phone: "+88-01814663094",
            website: "https://www.arena.com.bd/"
        },
        {
            id: 9,
            companyName: "KAZ SOFTWARE",
            email: "info@kaz.com.bd",
            phone: "+880 248315727",
            website: "https://kaz.com.bd/"
        },
        {
            id: 10,
            companyName: "BJIT",
            email: "info@bjitgroup.com",
            phone: "01755-997099",
            website: "https://bjitgroup.com/"
        },
    ]

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title='Company'>
                        <Link href={router.pathname + '/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Company</ButtonGreenSm>
                        </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable
                        {...tableProps}
                        onCheckAll={handleDtOnCheckAll}
                    >
                        { apiResponse?.data?.map((value:any) => {
                            return (
                                <tr className='datatable-row'>
                                    <td>
                                        <input onClick={handleDtOnCheck} type="checkbox"/>
                                    </td>

                                    <td>{value.id}</td>
                                    <td>{value.companyName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td><a href={value.website} target="_blank">{value.website}</a></td>
                                    <td >
                                        <div className="action-btns">
                                            <button className='action-btn'><FontAwesomeIcon icon={faPen} /></button>
                                            <button className='action-btn'><FontAwesomeIcon icon={faEye} /></button>
                                            <button className='action-btn' onClick={() => deleteTableData(value.id)}><FontAwesomeIcon icon={faTrashCan} /></button>

                                        </div>
                                    </td>
                                </tr>

                            )
                        }) }

                    </Datatable>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Company
