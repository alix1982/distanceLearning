// import logo from '../../image/header/logo.png';
// import burger from '../../image/header/burger.svg';
// import profile from '../../image/header/profile.svg';
// import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";
import { programmName } from "../../share/constantProgramm";
import ProgrammPointUserStudy from "./programmPointUserStudy/ProgrammPointUserStudy";

// import { useState } from "react";

function UserStudy() {
    const {user} = useSelector(state => state.userSlice?.userData)
    // const {programm} = user;
    // const [isMenu, setIsMenu] = useState('lk')
    // const navigation = useNavigate();
    // function handleRequest () {
    //     navigation('/questionnaire')
    // }
    // console.log(user)
 
    return (
        <section className='userStudy'>
            <h1 className='userStudy__heading'>Личный кабинет</h1>
            <ul className='userStudy__list'>
                {programmName.map((item, index) => 
                    user && (
                        user.programm[`programm${index+1}`].assigned && <ProgrammPointUserStudy key={item.id} prog={item}/>
                    )
                )}
            </ul>
        </section>

    )
}

export default UserStudy;