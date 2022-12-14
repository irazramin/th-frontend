import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const Dashboard = () => {
    const router = useRouter();
    return (
        <>
            <EmployerPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Exam</p>
                    </div>
                    <div className='action-btn'>
                        <Link href={router.pathname+'/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Exam</ButtonGreenSm>
                        </Link>
                    </div>
                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
