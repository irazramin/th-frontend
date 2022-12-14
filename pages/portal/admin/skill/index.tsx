import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faLaptopCode, faPlus, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Skill = () => {
    const router = useRouter();
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Skill</p>
                    </div>
                    <div className='breadcrumb'>
                        <Link href={router.pathname+'/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Skill</ButtonGreenSm>
                        </Link>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Skill
