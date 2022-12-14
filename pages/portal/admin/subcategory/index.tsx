import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Subcategory = () => {
    const router = useRouter();
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Subcategory</p>
                    </div>
                    <Link href={router.pathname+'/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Subcategory</ButtonGreenSm>
                    </Link>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Subcategory
