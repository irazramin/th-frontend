import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Dashboard = () => {
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Messages">
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Dashboard
