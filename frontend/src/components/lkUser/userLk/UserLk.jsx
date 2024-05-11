// import logo from '../../image/header/logo.png';
// import burger from '../../image/header/burger.svg';
// import profile from '../../image/header/profile.svg';
// import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";
import iconUser from '../../../image/header/iconUser.png';

// import { useState } from "react";

function UserLk() {
    const { userData } = useSelector(state => state.userSlice);

    // const [isMenu, setIsMenu] = useState('lk')
    // const navigation = useNavigate();
    // function handleRequest () {
    //     navigation('/questionnaire')
    // }
 
    return (
        <section className='userLk'>
            <h1 className='userLk__heading'>Личный кабинет</h1>
            <div className='userLk__content'>
                <img className='userLk__avatar' src={iconUser} alt="avatar"/>
                <ul className='userLk__userData'>
                    <li className='userLk__point'>
                        <p className='userLk__pointLeft'>ФИО:</p>
                        <p className='userLk__pointRight'>
                            {`
                                ${userData && userData?.questionnaire?.firstName}
                                ${userData && userData?.questionnaire?.lastName}
                                ${userData && userData?.questionnaire?.patronymic}
                            `}
                        </p>
                    </li>
                    <li className='userLk__point'>
                    <p className='userLk__pointLeft'>Возраст:</p>
                        <p className='userLk__pointRight'>
                            {`${userData && userData?.questionnaire?.firstName}`}
                        </p>
                    </li>
                    <li className='userLk__point'>
                        <p className='userLk__pointLeft'>Должность:</p>
                        <p className='userLk__pointRight'>
                            {`${userData && userData?.questionnaire?.postWork}`}
                        </p>
                    </li>
                    <li className='userLk__point'>
                        <p className='userLk__pointLeft'>СНИЛС:</p>
                        <p className='userLk__pointRight'>
                            {`${userData && userData?.questionnaire?.snils}`}
                        </p>
                    </li>
                    <li className='userLk__point'>
                        <p className='userLk__pointLeft'>Гражданство:</p>
                        <p className='userLk__pointRight'>
                            {`${userData && userData?.questionnaire?.citizenship}`}
                        </p>
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default UserLk;