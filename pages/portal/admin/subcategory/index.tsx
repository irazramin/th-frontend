import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Subcategory = () => {
    const router = useRouter();
    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'SUBCATEGORY', storable: false},
            {id: 3, name: 'CATEGORY', storable: false}
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const tableData = [
        {
            id: 1,
            subCategoryName: "Medical Administrator",
            category: "Healthcare Job",
        },
        {
            id: 2,
            subCategoryName: "Medical Laboratory Tech",
            category: "Healthcare Job",
        },
        {
            id: 3,
            subCategoryName: "Assistant Engineer",
            category: "Engineering Job",
        },
        {
            id: 4,
            subCategoryName: "Mechanical Engineer",
            category: "Engineering Job",
        },
        {
            id: 5,
            subCategoryName: "Production Engineer",
            category: "Engineering Job",
        },
        {
            id: 6,
            subCategoryName: "Client Service Specialist",
            category: "Customer Service",
        },
        {
            id: 7,
            subCategoryName: "Accounting Analyst",
            category: "Finance and Accounting Job",
        },
        {
            id: 8,
            subCategoryName: "Payroll Manager",
            category: "Finance and Accounting Job",
        },
        {
            id: 9,
            subCategoryName: "Business Analyst",
            category: "Researcher/Analyst Job",
        },
        {
            id: 10,
            subCategoryName: "Assistant Professor",
            category: "Teacher Job",
        },
        {
            id: 11,
            subCategoryName: "Mentor",
            category: "Teacher Job",
        },
        {
            id: 12,
            subCategoryName: "Teaching Assistant",
            category: "Teacher Job",
        },
        {
            id: 13,
            subCategoryName: "Digital Marketing Manager",
            category: "Marketing Job",
        },
        {
            id: 14,
            subCategoryName: "SEO Manager",
            category: "Marketing Job",
        },
        {
            id: 15,
            subCategoryName: "Software Engineer",
            category: "Information Technology (IT) Job",
        },
        {
            id: 16,
            subCategoryName: "UX Designer & UI Developer",
            category: "Information Technology (IT) Job",
        },
        {
            id: 17,
            subCategoryName: "SQL Developer",
            category: "Information Technology (IT) Job",
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
                <TitleCard  title="Subcategory">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Subcategory</ButtonGreenSm>
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
                                    <td>{data.subCategoryName}</td>
                                    <td>{data.category}</td>
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

export default Subcategory
