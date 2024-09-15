import logo from '../../image/header/logo.png';
// import logoYou from '../../image/logo1.jpg';
import {ReactComponent as LogoVK} from '../../image/footer/logo_VK.svg';
import {ReactComponent as LogoTelegramm} from '../../image/footer/logo_telegramm.svg';
// import {ReactComponent as LogoYou} from '../../image/logo1.jpg';

function Footer() {

    return (
        <footer className='footer' aria-label='подвал сайта'>
            <img className='footer__logo' src={logo} alt='логотип'/>
            <ul className='footer__list'>
                <li className='footer__point'>
                    <p className='footer__pointText'>Адрес: 164500, г.Северодвинск, ул.Лесная, д.25.</p>
                    <p className='footer__pointText'>Телефон: +7 (8184) 55-13-77</p>
                    <p className='footer__pointText'>Email: sgcc.kursy@mail.ru</p>
                </li>
                <li className='footer__point footer__pointLogo'>
                    <a className='footer__pointLinkLogo' href='https://vk.com/club200175099' target='_blank' rel="noreferrer"><LogoVK/></a>
                    <a className='footer__pointLinkLogo' href='https://vk.com/club200175099' target='_blank' rel="noreferrer"><LogoTelegramm/></a>
                </li>
                <li className='footer__point'>
                    <p className='footer__pointText'>
                        ©
                        {/* <img className='footer__logoYou' src={logoYou} alt='логотип автора'/> */}
                        Alix&Nata, 2023
                    </p>

                    {/* ©<LogoYou/>&Nata, 2023 */}
                    {/* <p className='footer__pointText'>Отзывы</p> */}
                </li>
            </ul>
            <div className='footer__menu'>
                <ul className='footer__menuList'>
                    <li className='footer__pointText footer__pointHeading'>
                        Обучение
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='#info'>Курсы ГО и ЧС</a>
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='#questions'>Поддержка</a>
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='https://acc-severodvinska.ru/contacts' target='_blank'>Отзывы</a>
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='#lkUser'>Личный кабинет</a>
                    </li>
                </ul>
                <ul className='footer__menuList'>
                    <li className='footer__pointText footer__pointHeading'>
                        Информация
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='https://acc-severodvinska.ru' target='_blank'>Об организации</a>
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='https://acc-severodvinska.ru/documents' target='_blank'>Политика</a>
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='https://acc-severodvinska.ru/contacts' target='_blank'>Контакты</a>
                    </li>
                    <li className='footer__pointText'>
                        <a className='footer__pointLink' href='https://acc-severodvinska.ru/news' target='_blank'>Новости</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;