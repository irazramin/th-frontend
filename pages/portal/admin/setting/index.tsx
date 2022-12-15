import {AdminPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Setting = () => {
    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Settings" />
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Setting
