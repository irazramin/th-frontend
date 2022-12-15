import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";

const Language = () => {
    const router = useRouter();
    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Language">
                        <Link href={router.pathname + '/add'}>
                            <ButtonGreenSm icon={faPlus}>Add Language</ButtonGreenSm>
                        </Link>
                </TitleCard>
                <DefaultCard>
                    <p>Test</p>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Language
