import {AdminPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import Link from "next/link";
import {faArrowLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Add = () => {
    const router = useRouter();
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Add</p>
                    </div>
                    <div className='breadcrumb'>
                            <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Add