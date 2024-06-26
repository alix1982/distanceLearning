// import logo from '../image/header/logo.png';
// import burger from '../image/header/burger.svg';
// import profile from '../image/header/profile.svg';
import { Info } from "./info/Info";
import { About } from "./about/About";
import { Actions } from "./actions/Actions";
import { Licensia } from "./license/Licensia";
import { Questions } from "./questions/Questions";

export const Main = () => {
    return (
        <main className='main' aria-label='главная страница'>
            <Info/>
            <About/>
            <Actions/>
            <Licensia/>
            <Questions/>
        </main>

    )
}
