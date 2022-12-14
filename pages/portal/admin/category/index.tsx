import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Category = () => {
    const router = useRouter();
    return (
        <>
            <AdminPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Category</p>
                    </div>
                    <Link href={router.pathname+'/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Category</ButtonGreenSm>
                    </Link>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Category
