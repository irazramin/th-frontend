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
            {id: 2, name: 'EXAM NAME', storable: false},
            {id: 3, name: 'CATEGORY', storable: false},
            {id: 4, name: 'DURATION', storable: false},
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const tableData = [
        {
            id: 1,
            examName: "Angular Frontend Developer",
            category: "IT",
            duration: "40min"
        },
        {
            id: 2,
            examName: "Angular Frontend Developer",
            category: "IT",
            duration: "40min"
        },
        {
            id: 3,
            examName: "Angular Frontend Developer",
            category: "IT",
            duration: "40min"
        },
        {
            id: 4,
            examName: "Angular Frontend Developer",
            category: "IT",
            duration: "40min"

        },
        {
            id: 5,
            examName: "Angular Frontend Developer",
            category: "IT",
            duration: "40min"
        },
        {
            id: 6,
            examName: "Angular Frontend Developer",
            category: "IT",
            duration: "40min"
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
                <TitleCard title="Exam">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Exam</ButtonGreenSm>
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
                                    <td>{data.examName}</td>
                                    <td>{data.category}</td>
                                    <td>{data.duration}</td>
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
