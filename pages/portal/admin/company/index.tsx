import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonDarkSm, ButtonGreenSm} from "../../../../components/buttons";
import {faCity, faPlus, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Company = () => {
    const router = useRouter();

    return (
        <>
            <AdminPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Company</p>
                    </div>
                    <div className='action-btn'>
                        <Link href={router.pathname+'/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Company</ButtonGreenSm>
                        </Link>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Company
