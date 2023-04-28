import {EmployerPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    const router = useRouter();

    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'JOB NAME', storable: false},
            {id: 3, name: 'VACANCY', storable: false},
            {id: 4, name: 'CATEGORY', storable: false},
            {id: 5, name: 'SUBCATEGORY', storable: false},
            {id: 6, name: 'SALARY', storable: false},
            {id: 7, name: 'MIN.EXP', storable: false},
            {id: 8, name: 'JOB TYPE', storable: false},
        ],
        enableCheckbox: true,
        enableAction: true
    }


    const tableData = [
        {
            id: 1,
            jobName: "Angular Frontend Developer",
            vacancy: 3,
            category: "IT",
            subCategory: "Software Engineer",
            salary: "25000-35000$",
            minimumExperience: "0-02yr",
            jobType: "Full-time"
        },
        {
            id: 2,
            jobName: "Project Manager",
            vacancy: 1,
            category: "IT",
            subCategory: "Software Engineer",
            salary: "150000-200000$",
            minimumExperience: "05-07yr",
            jobType: "Full-time"
        },
        {
            id: 3,
            jobName: "Sr.Accountant",
            vacancy: 2,
            category: "Finance And Accounting",
            subCategory: "Accounting Specialist",
            salary: "30000-35000$",
            minimumExperience: "03-05yr",
            jobType: "Full-time"
        },
        {
            id: 4,
            jobName: "Education Specialist",
            vacancy: 10,
            category: "Teacher",
            subCategory: "Mentor",
            salary: "15000-25000$",
            minimumExperience: "0-02yr",
            jobType: "Full-time"
        },
        {
            id: 5,
            jobName: "Digital Marketing Expert",
            vacancy: 7,
            category: "Marketing",
            subCategory: "Digital Marketing Manager",
            salary: "25000-35000$",
            minimumExperience: "0-02yr",
            jobType: "Full-time"
        },
        {
            id: 6,
            jobName: "C# Dot Net Developer",
            vacancy: 8,
            category: "IT",
            subCategory: "Software Engineer",
            salary: "55000-65000$",
            minimumExperience: "01-02yr",
            jobType: "Full-time"
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
            <EmployerPortalLayout>
                <TitleCard title="Job">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Job</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable
                        {...tableProps}
                        onCheckAll={handleDtOnCheckAll}
                    >
                        {tableData.map(data => {
                            return (
                                <tr className='datatable-row'>
                                    <td>
                                        <input onClick={handleDtOnCheck} type="checkbox"/>
                                    </td>

                                    <td>{data.id}</td>
                                    <td>{data.jobName}</td>
                                    <td>{data.vacancy}</td>
                                    <td>{data.category}</td>
                                    <td>{data.subCategory}</td>
                                    <td>{data.salary}</td>
                                    <td>{data.minimumExperience}</td>
                                    <td>{data.jobType}</td>
                                    <td>
                                        <div className="action-btns">
                                            <button className='action-btn'><FontAwesomeIcon icon={faPen}/></button>
                                            <button className='action-btn'><FontAwesomeIcon icon={faEye}/></button>
                                            <button className='action-btn'><FontAwesomeIcon icon={faTrashCan}/></button>

                                        </div>
                                    </td>
                                </tr>

                            )
                        })}


                    </Datatable>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
