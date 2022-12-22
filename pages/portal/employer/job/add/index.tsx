import {EmployerPortalLayout} from "../../../../../layouts";
import {ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";

const Add = () => {
    const router = useRouter();
    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Add">
                        <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Add