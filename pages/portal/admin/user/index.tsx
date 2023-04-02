import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const User = () => {
    const router = useRouter();
    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'NAME', storable: false},
            {id: 3, name: 'EMAIL', storable: false},
            {id: 4, name: 'PHONE', storable: false},
            {id: 5, name: 'ADDRESS', storable: false},
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const tableData = [
        {
            id: 1,
            name: "Lucinda F. Sturdivant",
            email: "lucinda@jourrapide.com",
            phone: "603-367-5653",
            address: "1544 Grasselli Street"
        },
        {
            id: 2,
            name: "Vernon M. Moreno",
            email: "VernonMMoreno@jourrapide.com",
            phone: "303-377-3995",
            address: "1513 Sweetwood Drive Denver"
        },
        {
            id: 3,
            name: "Patricia D. Sawyer",
            email: "PatriciaDSawyer@jourrapide.com",
            phone: "612-518-3178",
            address: "1724 Sardis Station Minneapolis"
        },
        {
            id: 4,
            name: "John M. Thomas",
            email: "JohnMThomas@jourrapide.com",
            phone: "352-514-2421",
            address: "913 George Street Gainesville"
        },
        {
            id: 5,
            name: "Tina J. Cline",
            email: "TinaJCline@armyspy.com",
            phone: "781-308-8226",
            address: "4977 Burke Street Cambridge"
        },
        {
            id: 6,
            name: "Billy M. Grimes",
            email: "BillyMGrimes@armyspy.com",
            phone: "315-796-5078",
            address: "3165 Saint Marys Avenue Syracuse"
        },
        {
            id: 7,
            name: "Addie T. Galloway",
            email: "AddieTGalloway@rhyta.com",
            phone: "913-565-8610",
            address: "14193 Poe Lane Manhattan"
        },
        {
            id: 8,
            name: "Linda J. Conde",
            email: "LindaJConde@armyspy.com",
            phone: "615-806-8998",
            address: "1518 Buffalo Creek Road Nashville"
        },
        {
            id: 9,
            name: "David B. Collins",
            email: "DavidBCollins@armyspy.com",
            phone: "612-279-5734",
            address: "4223 Lodgeville Road Golden Valley"
        },
        {
            id: 10,
            name: "Charles J. Wright",
            email: "CharlesJWright@teleworm.us",
            phone: "815-574-0215",
            address: "4702 Matthews Street Sterling"
        },
        {
            id: 11,
            name: "Patricia D. Perry",
            email: "PatriciaDPerry@dayrep.com",
            phone: "417-621-9003",
            address: "424 Chandler Drive Joplin"
        },
        {
            id: 12,
            name: "Kendra S. McNichols",
            email: "KendraSMcNichols@dayrep.com",
            phone: "214-451-3921",
            address: "1068 Poco Mas Drive Dallas"
        },
        {
            id: 13,
            name: "Rosalind R. Donnelly",
            email: "RosalindRDonnelly@rhyta.com",
            phone: "405-524-5367",
            address: "1275 Benson Park Drive Oklahoma City"
        },
        {
            id: 14,
            name: "Joetta A. Smidt",
            email: "JoettaASmidt@dayrep.com",
            phone: "605-452-7224",
            address: "3624 Andy Street Wood"
        },
        {
            id: 15,
            name: "Kimberly P. Ryan",
            email: "KimberlyPRyan@dayrep.com",
            phone: "210-639-2442",
            address: "2709 Fidler Drive San Antonio"
        },
        {
            id: 16,
            name: "Janice F. Sanchez",
            email: "JaniceFSanchez@armyspy.com",
            phone: "214-257-2141",
            address: "1484 Fancher Drive Irving"
        }
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
                <TitleCard title="User List">
                    <Link href={router.pathname + '/add'}>
                        {/*<ButtonGreenSm icon={faPlus}>Add User</ButtonGreenSm>*/}
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
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.address}</td>
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

export default User
