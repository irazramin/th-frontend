import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Dashboard = () => {
    const router = useRouter();
    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Job">
                        <Link href={router.pathname + '/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Job</ButtonGreenSm>
                        </Link>
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
