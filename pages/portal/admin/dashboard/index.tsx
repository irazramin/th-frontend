import {AdminPortalLayout} from "../../../../layouts";
import {
    ButtonDarkSm,
} from "../../../../components/buttons";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Dashboard = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Dashboard</p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Dashboard
