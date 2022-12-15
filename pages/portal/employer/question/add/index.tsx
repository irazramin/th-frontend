import {EmployerPortalLayout} from "../../../../../layouts";
import {ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Add = () => {
    const router = useRouter();
    return (
        <>
            <EmployerPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Add</p>
                    </div>
                    <div className='action-btn'>
                        <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                    </div>
                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Add