import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skill = () => {
    const router = useRouter();

    const tableProps = {
        name: 'userList',
        headers: [
            {
                id: 1,
                name: 'ID', storable: false
            },
            {
                id: 2,
                name: 'SKILLNAME', storable: false
            }
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const tableData = [
        {
            id: 1,
            skillName: "Analytical and problem solving"
        },
        {
            id: 2,
            skillName: "Microsoft Excel"

        },
        {
            id: 3,
            skillName: "Business and leadership"
        },
        {
            id: 4,
            skillName: "Data analytics"
        },
        {
            id: 5,
            skillName: "Communication skills"
        },
        {
            id: 6,
            skillName: "Data mining"

        },
        {
            id: 7,
            skillName: "Collaboration"
        },
        {
            id: 8,
            skillName: "Project management"

        },
        {
            id: 9,
            skillName: "UX and UI design"

        },
        {
            id: 10,
            skillName: "Operating systems"
        },
        {
            id: 11,
            skillName: "Teamwork"
        },
        {
            id: 12,
            skillName: "JavaScript"
        },
        {
            id: 13,
            skillName: "Git"

        },
        {
            id: 14,
            skillName: "Testing and Debugging\n"
        },
        {
            id: 15,
            skillName: "Search Engine Optimization(SEO)"
        },
        {
            id: 16,
            skillName: "PHP"
        },
        {
            id: 17,
            skillName: "HTML & CSS"
        },
        {
            id: 18,
            skillName: "ReactJs"
        },
        {
            id: 19,
            skillName: "NodeJs"
        },
        {
            id: 20,
            skillName: "Bootstrap5"
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
                <TitleCard title="Skill">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Skill</ButtonGreenSm>
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
                                    <td>{data.skillName}</td>
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

export default Skill
