// import logo from '../image/header/logo.png';
// import burger from '../image/header/burger.svg';
// import profile from '../image/header/profile.svg';
import { Info } from "./info/Info";
import { About } from "./about/About";

export const Main = () => {
    return (
        <main className='main' aria-label='главная страница'>
            <Info/>
            <About/>
        </main>

    )
}
