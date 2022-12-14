import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faLanguage, faLaptopCode, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Language = () => {
    const router = useRouter();
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Language</p>
                    </div>
                    <div className='breadcrumb'>
                        <Link href={router.pathname+'/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Language</ButtonGreenSm>
                        </Link>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Language
