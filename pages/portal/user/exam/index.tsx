import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Exam = () => {
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Exam">
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Exam
