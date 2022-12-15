import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";


const Job = () => {
    return (
        <>
            <UserPortalLayout>

                <TitleCard title="Job">
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Job
