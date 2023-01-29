import {UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Dashboard = () => {
    return (
        <>
            <UserPortalLayout>
                <TitleCard title='Dashboard'>
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Dashboard
