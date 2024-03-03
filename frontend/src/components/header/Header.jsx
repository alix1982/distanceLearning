import logo from '../../image/header/logo.png';
// import burger from '../../image/header/burger.svg';
import profile from '../../image/header/profile.svg';

function Header() {
    return (
        <header className='header' aria-label='шапка сайта'>
            <img className='header__logo' src={logo} alt='логотип'/>
            {/* <button className='header__menu'>
                <img className='header__menuIcon' src={burger} alt='меню'/>
            </button> */}
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
            <button className='header__request'>Подать заявку</button>
            <a className='header__phone' href="tel:+78184551377">(8184) 55-13-77</a>
            <button className='header__profile'>
                <img className='header__profileIcon' src={profile} alt='профиль'/>
            </button>
            {/* <p className='test'>test</p> */}
        </header>

    )
}

export default Header;