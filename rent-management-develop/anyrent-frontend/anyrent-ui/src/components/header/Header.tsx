import React from "react";
import "./header.less";
import Logo from "../logo/Logo";
import Input from "../input/ARInput";
import Button from "../Button/Button";
import ARInput from "../input/ARInput";
import ARSearchInput from "../searchInput/ARSearchInput";
const Header = () => {
    return (
        <header className="ar-header">
            <div className="ar-header-wrapper">
                <div className="ar-header__logo-container">
                    <input id="toggle" type="checkbox"></input>

                    <label htmlFor="toggle" className="hamburger">
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>
                    </label>

                    <div className="ar-header__nav-menu">
                        <div className="nav-menu__column">
                            <div className="column__block">
                                <h3>Спорт</h3>
                                <a>Летние виды</a>
                                <a>Зимние виды</a>
                                <a>Активный отдых</a>
                            </div>
                            <div className="column__block">
                                <h3>Для дома</h3>
                                <a>Мебель</a>
                                <a>Кухонная техника</a>
                                <a>Все для уборки</a>
                            </div>
                        </div>
                        <div className="nav-menu__column">
                            <div className="column__block">
                                <h3>Недвижимость</h3>
                                <a>Дома</a>
                                <a>Коттеджи</a>
                                <a>Квартиры</a>
                                <a>Помещения</a>
                            </div>
                            <div className="column__block">
                                <h3>Электроника</h3>
                                <a>Фото/Видео</a>
                                <a>Диагностика</a>
                                <a>Пылесосы/Химчистка</a>
                            </div>
                        </div>
                        <div className="nav-menu__column">
                            <div className="column__block">
                                <h3>Одежда</h3>
                                <a>Костюмы</a>
                                <a>Платья</a>
                                <a>Спортивная одежда</a>
                                <a>Детская одежда</a>
                                <a>Аксессуары</a>
                            </div>
                        </div>
                        <div className="nav-menu__column">
                            <div className="column__block">
                                <h3>Авто</h3>
                                <a>Легковые</a>
                                <a>Грузовые</a>
                                <a>Автобусы</a>
                                <a>Коммерческие</a>
                            </div>
                            <div className="column__block">
                                <h3>Мото</h3>
                                <a>Мотоциклы</a>
                                <a>Скутеры</a>
                                <a>Снегоходы</a>
                            </div>
                        </div>
                        <div className="nav-menu__column">
                            <div className="column__block">
                                <h3>Развлечения</h3>
                                <a>Настольные игры</a>
                                <a>Компьютерные игры</a>
                                <a>Аудио-оборудование</a>
                            </div>
                            <div className="column__block">
                                <h3>Музыка</h3>
                                <a>Синтезаторы</a>
                                <a>Гитары</a>
                                <a>Духовые</a>
                                <a>Ударные</a>
                                <a>Микшерные пульты</a>
                                <a>Микрофоны</a>
                            </div>
                        </div>
                    </div>
                    <Logo size="mini" hover="hover"/>
                </div>

                <div className="ar-header__nav">
                    <nav className="navbar">
                        <a>Недвижимость</a>
                        <a>Авто</a>
                        <a>Спорт</a>
                        <a>О нас</a>
                    </nav>
                </div>
                <div className="ar-header-search__bar">
                    <ARSearchInput placeholder="Поиск" />
                    <Button className="btn btn--header" text="Sign In" />
                </div>
            </div>
        </header>
    );
};

export default Header;
