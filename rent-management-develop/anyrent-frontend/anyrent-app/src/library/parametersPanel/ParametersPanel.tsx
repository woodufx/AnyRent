import "./parametersPanel.less";
import SvgIcon from "../svgIcon/SvgIcon";
import { useEffect, useState } from "react";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { ARUserRoutes, userRoutes } from "../../core/config/routes.config";

import userLogo from "../../assets/styles/img/userLogo.png";
import userLogoFocus from "../../assets/styles/img/userLogoFocus.png";

import homeLogo from "../../assets/styles/img/homeLogo.png";
import homeLogoFocus from "../../assets/styles/img/homeLogoFocus.png";

import starLogo from "../../assets/styles/img/starLogo.png";
import starLogoFocus from "../../assets/styles/img/starLogoFocus.png";

import favLogo from "../../assets/styles/img/favLogo.png";
import favLogoFocus from "../../assets/styles/img/favLogoFocus.png";

import messagesLogo from "../../assets/styles/img/messagesLogo.png";
import messagesLogoFocus from "../../assets/styles/img/messagesLogoFocus.png";

import newrentLogo from "../../assets/styles/img/newrentLogo.png";
import newrentLogoFocus from "../../assets/styles/img/newrentLogoFocus.png";

import notificationLogo from "../../assets/styles/img/notificationLogo.png";
import notificationLogoFocus from "../../assets/styles/img/notificationLogoFocus.png";

import historyLogo from "../../assets/styles/img/iconHistory.png";
import historyLogoFocus from "../../assets/styles/img/historyFocus.png";

import inRentLogo from "../../assets/styles/img/inRent.png";
import inRentLogoFocus from "../../assets/styles/img/inRentHover.png";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
    import { ARUserPanelMatchRoutes } from "../../core/config/routes.config";
import ReactTooltip from "react-tooltip";

export interface ParametersPanelProps { }

const ParametersPanel = (props: ParametersPanelProps) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.user);
    const location = useLocation();

    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div className="panel-wrapper">
            <NavLink style={{ textDecoration: "none" }} to={userRoutes.getUserInfoRoute()}>
                <span tabIndex={-1} className={`panel-a ${splitLocation[2] === ARUserPanelMatchRoutes.PROFILE ? "active-item" : ""}`}>
                    <img className="panel-img" src={splitLocation[2] === ARUserPanelMatchRoutes.PROFILE ? userLogoFocus : userLogo} alt="" />
                    <span className="panel-span">Мои данные</span>
                </span>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to={userRoutes.getUserItemsRoute()}>
                <span tabIndex={-1} className={`panel-a ${splitLocation[2] === ARUserPanelMatchRoutes.MY_ITEMS ? "active-item" : ""}`}>
                    <img className="panel-img" src={splitLocation[2] === ARUserPanelMatchRoutes.MY_ITEMS ? homeLogoFocus : homeLogo} alt="" />
                    <span className="panel-span">Мои товары</span>
                </span>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to={userRoutes.getUserFavsRoute()}>
                <span tabIndex={-1} className={`panel-a ${splitLocation[2] === ARUserPanelMatchRoutes.FAVOURITE ? "active-item" : ""}`}>
                    <img className="panel-img" src={splitLocation[2] === ARUserPanelMatchRoutes.FAVOURITE ? favLogoFocus : favLogo} alt="" />
                    <span className="panel-span">Избранное</span>
                </span>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to={userRoutes.getUserAddItemRoute()}>
                <span tabIndex={-1} className={`panel-a ${splitLocation[2] === ARUserPanelMatchRoutes.NEW_RENT ? "active-item" : ""}`}>
                    <img className="panel-img" src={splitLocation[2] === ARUserPanelMatchRoutes.NEW_RENT ? newrentLogoFocus : newrentLogo} alt="" />
                    <span className="panel-span">Новая аренда</span>
                </span>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to={userRoutes.getUserInRentRoute()}>
                <span tabIndex={-1} className={`panel-a ${splitLocation[2] === ARUserPanelMatchRoutes.IN_RENT ? "active-item" : ""}`}>
                    <img
                        className="panel-img"
                        src={splitLocation[2] === ARUserPanelMatchRoutes.IN_RENT ? inRentLogo : inRentLogoFocus}
                        alt=""
                    />
                    <span className="panel-span">Товары в аренде</span>
                </span>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to={userRoutes.getUserHistoryRoute()}>
                <span tabIndex={-1} className={`panel-a ${splitLocation[2] === ARUserPanelMatchRoutes.ORDERS_HISTORY ? "active-item" : ""}`}>
                    <img
                        className="panel-img"
                        src={splitLocation[2] === ARUserPanelMatchRoutes.ORDERS_HISTORY ? historyLogoFocus : historyLogo}
                        alt=""
                    />
                    <span className="panel-span">История аренд</span>
                </span>
            </NavLink>
        </div>
    );
};

export default ParametersPanel;
