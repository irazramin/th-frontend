import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";

const User = () => {
    const router = useRouter();
    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'NAME', storable: false},
            {id: 3, name: 'EMAIL', storable: false},
            {id: 4, name: 'PHONE', storable: false},
            {id: 5, name: 'MOBILE', storable: false},
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

    console.log(tableProps);


    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="User List">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add User</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable
                        {...tableProps}
                        onCheckAll={handleDtOnCheckAll}
                    >
                        <tr>
                            <td>
                                <input onClick={handleDtOnCheck} type="checkbox"/>
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                JOHN DOE
                            </td>
                            <td>
                                john@gmail.com
                            </td>
                            <td>
                                01770000000
                            </td>
                            <td>
                                01770000001
                            </td>
                            <td>
                                Action
                            </td>
                        </tr>
                    </Datatable>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default User
