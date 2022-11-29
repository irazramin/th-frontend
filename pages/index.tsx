import {LandingLayout} from '../layouts';
import {ButtonGreenLg, ButtonGreenMd, ButtonGreenSm, ButtonDarkLg, ButtonDarkMd, ButtonDarkSm } from "../components/buttons";

const Home = () => {
    return (
        <>
            <LandingLayout>
                <ButtonGreenLg>This</ButtonGreenLg>
                <ButtonGreenMd>This</ButtonGreenMd>
                <ButtonGreenSm>This</ButtonGreenSm>
                <br/>
                <ButtonDarkLg>This</ButtonDarkLg>
                <ButtonDarkMd>This</ButtonDarkMd>
                <ButtonDarkSm>This</ButtonDarkSm>
            </LandingLayout>
        </>
    );
}

export default Home
