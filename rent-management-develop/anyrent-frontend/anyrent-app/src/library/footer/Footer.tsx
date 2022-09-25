import Logo from "../logo/Logo";
import "./footer.less";
import vkontakte from "../../assets/styles/img/vkontakte.png";
import instagram from "../../assets/styles/img/instagram.png";
import odnoklassniki from "../../assets/styles/img/odnoklassniki.png";
import telegram from "../../assets/styles/img/telegram.png";
import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import { ARRoutes} from "../../core/config/routes.config";
import { useEffect } from "react";


export const ARFooter = () => {
    const {pathname} = useLocation();
    let navigate = useNavigate();

    useEffect(()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    },[pathname] );

    return (
        <div className="ar-footer">
            <div className="ar-footer-conainer">
                <div className="ar-footer__logo-container">
                    <Logo style="white-text" hover="hover" onClick={() => navigate(ARRoutes.MAIN_PAGE)}/>
                </div>

                <div className="ar-footer__content">
                    <div className="ar-footer__menu">
                        <ul className="ar-footer__menu-list">
                            <li className="menu-list__item--title">Компания</li>
                            <li className="menu-list__item">
                                <NavLink to={ARRoutes.ABOUT_US_PAGE} className="menu-list__item-link" >
                                    О нас
                                </NavLink>
                            </li>
                            <li className="menu-list__item">
                                <NavLink to={ARRoutes.ABOUT_TEAM} className="menu-list__item-link" >
                                    Наша команда
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                     {/* <div className="ar-footer__menu">
                        <ul className="ar-footer__menu-list">
                            <li className="menu-list__item--title">Разработчики</li>
                            <li className="menu-list__item">
                                <a className="menu-list__item-link" href="">
                                    Новые идеи
                                </a>
                            </li>
                            <li className="menu-list__item">
                                <a className="menu-list__item-link" href="">
                                    Веб-документы
                                </a>
                            </li>
                             <li className="menu-list__item menu-list__item--last">
                                <a className="menu-list__item-link" href="">
                                    Инструменты
                                </a>
                            </li> 
                        </ul>
                    </div>  */}

                    <div className="ar-footer__menu">
                        <ul className="ar-footer__menu-list">
                            <li className="menu-list__item--title">Ресурсы</li>
                            <li className="menu-list__item">
                                <NavLink to={ARRoutes.CONFIDENTIAL} className="menu-list__item-link" >
                                    Конфиденциальность
                                </NavLink>
                            </li>
                            <li className="menu-list__item menu-list__item--last">
                                <NavLink to={ARRoutes.CONTACTS} className="menu-list__item-link" >
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="ar-footer__menu">
                        <ul className="ar-footer__menu-list">
                            <li className="menu-list__item--title">Справка</li>
                            <li className="menu-list__item">
                                <NavLink to={ARRoutes.SUPPORT} className="menu-list__item-link" >
                                    Поддержка
                                </NavLink>
                            </li>
                            <li className="menu-list__item menu-list__item--last">
                                <NavLink to={ARRoutes.FIND_BUG} className="menu-list__item-link" >
                                    Нашли баг?
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="ar-footer__white-line"></div>

                <div className="ar-footer__bottom">
                    <div className="bottom__copyright">
                        <p className="bottom__copyright-text">©2022 AnyRent Inc. Все права защищены</p>
                    </div>

                    <div className="bottom__social-networks">
                        <a href="https://vk.com/anyrent">
                            <img title="Вконтакте" className="social-networks__item-link" src={vkontakte} alt="" />
                        </a>
                        <a href="www.instagram.com/_anyrent">
                            <img title="Инстаграм" className="social-networks__item-link" src={instagram} alt="" />
                        </a>
                        <a href="https://t.me/anyrent">
                            <img title="Телеграм" className="social-networks__item-link" src={telegram} alt="" />
                        </a>
                    </div>

                    <div className="bottom__terms">
                        <NavLink to={ARRoutes.TERMS_RIGHTS} className="bottom__terms-link" >
                            Условия обслуживания
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
