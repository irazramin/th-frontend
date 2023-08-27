import {EmployerPortalLayout} from "../../../../../layouts";
import {TitleCard} from "../../../../../components/cards";
import ResumeComponent from "../../../../../features/user/resume/ResumeComponent";
import {useRouter} from "next/router";

const Resume = () => {
    const router = useRouter();

    return (
        <EmployerPortalLayout>
            <TitleCard title="Resume">
            </TitleCard>
            {router?.query?.id ? (
                <ResumeComponent resumeEndpoint={`api/v1/user/profile/${router?.query?.id}`}/>
            ) : ''}
        </EmployerPortalLayout>
    );
}

export default Resume