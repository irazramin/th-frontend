import {EmployerPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Setting = () => {
    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Settings"/>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Setting
