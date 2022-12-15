import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Dashboard = () => {
    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title='Dashboard'>
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
