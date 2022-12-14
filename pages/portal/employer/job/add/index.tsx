import {AdminPortalLayout, EmployerPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import Link from "next/link";
import {faArrowLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
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