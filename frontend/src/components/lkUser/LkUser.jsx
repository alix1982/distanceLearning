// import logo from '../../image/header/logo.png';
// import burger from '../../image/header/burger.svg';
// import profile from '../../image/header/profile.svg';
// import { useNavigate } from 'react-router-dom';

import { useState } from "react";
import UserLk from "./userLk/UserLk";
import UserNotice from "./userNotice/UserNotice";
import UserStudy from "./userStudy/UserStudy";

function LkUser() {
    const [isMenu, setIsMenu] = useState('lk')
    // const navigation = useNavigate();
    // function handleRequest () {
    //     navigation('/questionnaire')
    // }
 
    return (
        <main className='mainLkUser'>
            <nav className='mainLkUser__menu'>
                <li
                    className={`mainLkUser__point ${isMenu === 'lk' && 'mainLkUser__point_active'}`}
                    onClick={()=>setIsMenu('lk')}
                >Профиль</li>
                <li
                    className={`mainLkUser__point ${isMenu === 'notice' && 'mainLkUser__point_active'}`}
                    onClick={()=>setIsMenu('notice')}
                >Уведомления</li>
                <li
                    className={`mainLkUser__point ${isMenu === 'study' && 'mainLkUser__point_active'}`}
                    onClick={()=>setIsMenu('study')}
                >Обучение</li>
            </nav>
            { isMenu === 'lk' && <UserLk/> }
            { isMenu === 'notice' && <UserNotice/> }
            { isMenu === 'study' && <UserStudy/> }
        </main>

    )
}

export default LkUser;