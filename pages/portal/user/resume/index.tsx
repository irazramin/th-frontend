import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Resume = () => {
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Resume">
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Resume
