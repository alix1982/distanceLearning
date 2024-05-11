import logo from '../../image/header/logo.png';
import burger from '../../image/header/burger.svg';
import profile from '../../image/header/profile.svg';
import iconUser from '../../image/header/iconUser.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { receivingUser } from '../store/slice/userSlice';

function Header() {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.authSlice);
    const { userData } = useSelector(state => state.userSlice);

    // console.log(isAuth);
    // console.log(userData);

    useEffect(()=> {
        isAuth && dispatch(receivingUser())
    },[isAuth])

    const navigation = useNavigate();
    function handleRequest () {
        navigation('/questionnaire')
    }
 
    return (
        <header className='header' aria-label='шапка сайта'>
            <img className='header__logo' src={logo} alt='логотип' onClick={()=>{navigation('/')}}/>
            <button className='header__menu'>
                <img className='header__menuIcon' src={burger} alt='меню'/>
            </button>
            <ul className='header__list'>
                <li className='header__point'>
                    <p className='header__pointText'>О компании</p>
                </li>
                <li className='header__point'>
                    <p className='header__pointText'>Курсы</p>
                </li>
                <li className='header__point header__point_open'>
                    <p className='header__pointText'>Поддержка</p>
                    <ul className='header__subList header__subList_open'>
                        <li className='header__subPoint'>Руководство пользователя</li>
                        <li className='header__subPoint'>Справочный раздел</li>
                        <li className='header__subPoint'>Обновления СДО</li>
                        <li className='header__subPoint'>Правила и регламенты</li>
                    </ul>
                </li>
                <li className='header__point'>
                    <p className='header__pointText'>Отзывы</p>
                </li>
            </ul>
            {!isAuth ? 
                <>
                    <button className='header__request' onClick={handleRequest}>Подать заявку</button>
                    <a className='header__phone' href="tel:+78184551377">(8184) 55-13-77</a>
                    <button className='header__profile' onClick={()=>{navigation('/signin')}}>
                        <img className='header__profileIcon' src={profile} alt='профиль'/>
                    </button>
                </> :
                <>
                    <p className='header__userName'>
                        {`
                            ${userData ? userData?.questionnaire?.firstName : ''}
                            ${userData ? userData?.questionnaire?.lastName: ''}
                            ${userData ? userData?.questionnaire?.patronymic: ''}
                        `}
                    </p>
                    <button className='header__profileUser' onClick={()=>{navigation('/lkUser')}}>
                        <img className='header__profileIconUser' src={iconUser} alt='профиль'/>
                    </button>
                </>
            } 
            {/* <p className='test'>test</p> */}
        </header>

    )
}

export default Header;