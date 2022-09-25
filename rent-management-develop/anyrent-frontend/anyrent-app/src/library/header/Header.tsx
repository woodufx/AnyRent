import React, { useEffect, useState } from "react";
import "./header.less";
import Logo from "../logo/Logo";
import shop from "../../assets/styles/svg/icons/myShop.svg";
import heartEmpty from "../../assets/styles/img/heartEmpty.png";
import plus from "../../assets/styles/svg/icons/plus.svg";
import avatar from "../../assets/styles/svg/icons/Avatar.svg";
import logOutViolet from "../../assets/styles/img/log-out-violet.png";
import plusViolet from "../../assets/styles/img/plus-square-violet.png";
import shopViolet from "../../assets/styles/img/my-shop-violet.png";
import userViolet from "../../assets/styles/img/user-violet.png";
import heartViolet from "../../assets/styles/img/heart-violet.png";
import iconHistory from "../../assets/styles/img/historyImg.png";
import inRent from "../../assets/styles/img/inRentDR.png";

import { ARSearchInput } from "../searchInput";
import { ARButton } from "../button/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ARRoutes, itemsRoutes, userRoutes } from "../../core/config/routes.config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { logout } from "../../core/store/userSlice";
import { getSearchItems } from "../../core/store/itemsSlice";
import { getBurgerCategories } from "../../core/store/categorySlice";
import { IBurgerCategory } from "../../core/models/category.model";
import Loading from "../loading/Loading";
import ReactTooltip from "react-tooltip";
import { ARAvatar } from "../avatar";

export const ARHeader = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState(false);
    const { user } = useSelector((state: RootState) => state.user);
    const { burgerCategoryList } = useSelector((state: RootState) => state.category);

    useEffect(() => {
        dispatch(getBurgerCategories());
    }, []);

    const displayNavLinks = () => {
        let headerCategories = burgerCategoryList.slice(0, 3);
        return headerCategories.map((headerCategory: IBurgerCategory, index) => {
            return (
                <NavLink key={index} style={{ textDecoration: "none" }} to={itemsRoutes.getItemsByCategoryRoute(headerCategory.id)}>
                    {headerCategory.name}
                </NavLink>
            );
        });
    };

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
                        <div className="nav-wrap">
                            {burgerCategoryList.length ? (
                                burgerCategoryList.map((burgerCategory: IBurgerCategory, index) => {
                                    return (
                                        <div key={index} className="column__block">
                                            <h3
                                                onClick={() => {
                                                    navigate(itemsRoutes.getItemsByCategoryRoute(burgerCategory.id));
                                                }}
                                            >
                                                {burgerCategory.name}
                                            </h3>
                                            {burgerCategory.subCategories.map((burgerLink: IBurgerCategory, index: any) => {
                                                return (
                                                    <a
                                                        key={index}
                                                        onClick={() => {
                                                            navigate(itemsRoutes.getItemsByCategoryRoute(burgerLink.id));
                                                        }}
                                                    >
                                                        {burgerLink.name}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    );
                                })
                            ) : (
                                <Loading style="primary" />
                            )}
                        </div>
                    </div>
                    <Logo size="mini" hover="hover" onClick={() => navigate(ARRoutes.MAIN_PAGE)} />
                </div>

                <div className="ar-header__nav">
                    <nav className="navbar">
                        {burgerCategoryList.length ? displayNavLinks() : <></>}
                        {burgerCategoryList.length ? (
                            <NavLink style={{ textDecoration: "none" }} to={ARRoutes.ABOUT_US_PAGE}>
                                О нас
                            </NavLink>
                        ) : (
                            <></>
                        )}
                    </nav>
                </div>
                <div className="ar-header__search-bar">
                    <ARSearchInput
                        placeholder="Поиск"
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            dispatch(getSearchItems(searchValue));
                            if (searchValue.replace(/\s/g, "").toLocaleLowerCase() !== "") {
                                navigate(itemsRoutes.getItemsBySearch(searchValue.trim().replace(/\s/g, "+").toLocaleLowerCase()));
                            }
                        }}
                    />
                </div>
                {user ? (
                    <div className="ar-header__user">
                        <div className="ar-header__links">
                            <img
                                className="user-icons"
                                src={shop}
                                alt="shop"
                                onClick={() => navigate(userRoutes.getUserItemsRoute())}
                                data-tip
                                data-for="myRentsPageTip"
                            />
                            <ReactTooltip id="myRentsPageTip" place="bottom" effect="solid" delayShow={50} delayHide={100}>
                                Мои товары
                            </ReactTooltip>
                        </div>
                        <div className="ar-header__links">
                            <img
                                className="user-icons"
                                src={heartEmpty}
                                alt="favorites"
                                onClick={() => navigate(userRoutes.getUserFavsRoute())}
                                data-tip
                                data-for="favouritePageTip"
                            />
                            <ReactTooltip id="favouritePageTip" place="bottom" effect="solid" delayShow={50} delayHide={100}>
                                Избранное
                            </ReactTooltip>
                        </div>
                        <div className="ar-header__links">
                            <img
                                className="user-icons"
                                src={plus}
                                alt="add"
                                data-tip
                                data-for="addRentTip"
                                onClick={() => navigate(userRoutes.getUserAddItemRoute())}
                            />
                            <ReactTooltip id="addRentTip" place="bottom" effect="solid" delayShow={50} delayHide={100}>
                                Новая аренда
                            </ReactTooltip>
                        </div>
                        <div className="ar-header__links">
                            {user.avatar ? (
                                <img className="user-icons" src={user.avatar} alt="avatar" onClick={() => setOpen(!open)} />
                            ) : (
                                <ARAvatar size="small" name={user.name} surname={user.surname? user.surname : ""} onClick={() => setOpen(!open)} hover={true} />
                            )}

                            <div className={open ? "ar-header__dropdown" : "ar-header__dropdown hiden"}>
                                <div className="ar-header__items">
                                    <div
                                        className="ar-header__item"
                                        onClick={() => {
                                            setOpen(!open);
                                            navigate(userRoutes.getUserInfoRoute());
                                        }}
                                    >
                                        <img src={userViolet} alt="" />
                                        <h2 className="ar-header__link"> Мои данные </h2>
                                    </div>
                                    <div
                                        className="ar-header__item"
                                        onClick={() => {
                                            setOpen(!open);
                                            navigate(userRoutes.getUserAddItemRoute());
                                        }}
                                    >
                                        <img src={plusViolet} alt="" />
                                        <h2 className="ar-header__link"> Создать аренду </h2>
                                    </div>
                                    <div
                                        className="ar-header__item"
                                        onClick={() => {
                                            setOpen(!open);
                                            navigate(userRoutes.getUserFavsRoute());
                                        }}
                                    >
                                        <img src={heartViolet} alt="" />
                                        <h2 className="ar-header__link"> Избранные </h2>
                                    </div>
                                    <div
                                        className="ar-header__item"
                                        onClick={() => {
                                            setOpen(!open);
                                            navigate(userRoutes.getUserItemsRoute());
                                        }}
                                    >
                                        <img src={shopViolet} alt="" />
                                        <h2 className="ar-header__link"> Мои товары </h2>
                                    </div>
                                    <div className="ar-header__item" onClick={() => navigate(userRoutes.getUserInRentRoute())}>
                                        <img src={inRent} alt="" />
                                        <h2 className="ar-header__link"> Товары в аренде </h2>
                                    </div>
                                    <div className="ar-header__item" onClick={() => navigate(userRoutes.getUserHistoryRoute())}>
                                        <img src={iconHistory} alt="" />
                                        <h2 className="ar-header__link"> История аренд </h2>
                                    </div>
                                    <div
                                        className="ar-header__item"
                                        onClick={() => {
                                            navigate(ARRoutes.MAIN_PAGE);
                                            dispatch(logout());
                                        }}
                                    >
                                        <img src={logOutViolet} alt="" />
                                        <h2 className="ar-header__link"> Выйти</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="ar-header__sign-in">
                        <ARButton
                            variant="sign-in"
                            text="Войти"
                            onClick={() => {
                                navigate(ARRoutes.LOGIN_PAGE);
                            }}
                        />
                    </div>
                )}
            </div>
        </header>
    );
};

// {user ? (

// ) : (
//     <div>
//         <ARButton
//             className="btn btn--header"
//             text="Sign In"
//             onClick={() => {
//                 navigate(ARRoutes.LOGIN_PAGE);
//             }}
//         />
//     </div>
// )}
