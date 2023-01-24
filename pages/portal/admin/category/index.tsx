import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Category = () => {
    const router = useRouter();
    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'CATEGORY', storable: false},
            {id: 3, name: 'SUBCATEGORY', storable: false},
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const tableData = [
        {
            id: 1,
            categoryName: "Healthcare Job",
            subcategory: 2,
        },
        {
            id: 2,
            categoryName: "Engineering Job",
            subcategory: 3,
        },
        {
            id: 3,
            categoryName: "Customer Service Job",
            subcategory: 1,
        },
        {
            id: 4,
            categoryName: "Finance and Accounting Job",
            subcategory: 2,
        },
        {
            id: 5,
            categoryName: "Researcher/Analyst Job",
            subcategory: 1,
        },
        {
            id: 6,
            categoryName: "Teacher Job",
            subcategory: 3,
        },
        {
            id: 7,
            categoryName: "Marketing Job",
            subcategory: 2,
        },
        {
            id: 8,
            categoryName: "Information Technology (IT) Job",
            subcategory: 3,
        },
        {
            id: 9,
            categoryName: "KAZ SOFTWARE",
            subcategory: "info@kaz.com.bd",
        },
        {
            id: 10,
            categoryName: "BJIT",
            subcategory: "info@bjitgroup.com",
        },
    ]

    const handleDtOnCheckAll = (e: any) => {
        alert('Check all clicked')
    }

    const handleDtOnCheck = (e: any) => {
        alert('Check clicked')
    }
    return (
        <>
            <AdminPortalLayout>
                <TitleCard title='Category'>
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Category</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable
                        {...tableProps}
                        onCheckAll={handleDtOnCheckAll}
                    >
                        { tableData.map(data => {
                            return (
                                <tr className='datatable-row'>
                                    <td>
                                        <input onClick={handleDtOnCheck} type="checkbox"/>
                                    </td>

                                    <td>{data.id}</td>
                                    <td>{data.categoryName}</td>
                                    <td>{data.subcategory}</td>
                                    <td >
                                        <div className="action-btns">
                                            <button className='action-btn'><FontAwesomeIcon icon={faPen} /></button>
                                            <button className='action-btn'><FontAwesomeIcon icon={faEye} /></button>
                                            <button className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></button>

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

export default Category
