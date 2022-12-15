import {AdminPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Dashboard = () => {
    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Dashboard">
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Dashboard
