import ResumeComponent from "../../../../features/user/resume/ResumeComponent";
import {UserPortalLayout} from "../../../../layouts";
import {TitleCard} from "../../../../components/cards";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Resume = () => {
    const router = useRouter()
    return (
        <UserPortalLayout>
            <TitleCard title="Resume">
                <Link href={router.pathname + '/add'}>
                    <ButtonGreenSm icon={faPlus}>Add Resume</ButtonGreenSm>
                </Link>
            </TitleCard>
            <ResumeComponent/>
        </UserPortalLayout>
    );
}

export default Resume
