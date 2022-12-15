import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Setting = () => {
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Settings">
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Setting
