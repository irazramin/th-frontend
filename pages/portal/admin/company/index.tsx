import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Company = () => {
    const router = useRouter();

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title='Company'>
                        <Link href={router.pathname + '/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Company</ButtonGreenSm>
                        </Link>
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Company
