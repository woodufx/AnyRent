import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ARShowCaseRoutes } from "../core/config/routes.config";

const ShowCase = () => {
    return (
        <div className="show-case-main-container">
            <div className="show-case-components-list">
                <h2>Components list:</h2>
                <div className="show-case-list">
                    <ul>
                        <li>
                            <NavLink to={ARShowCaseRoutes.INPUT}>Input</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.SEARCH_INPUT}>Search Input</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.RADIO}>Radio</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.CHECKBOX}>Checkbox</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.LOGO}>Logo</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.SIGN_UP_FORM}>Sign Up Form</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.LOADING}>Loading</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.DROPDOWN}>Dropdown</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.HEADER}>Header</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.FOOTER}>Footer</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.CATEGORY_CARD}>Category Card</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.RATING}>Rating</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.PANEL}>Parameters Panel</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.TIME_PICKER}>Time Picker</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.DATE_PICKER}>Date Picker</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.CAROUSEL}>Carousel</NavLink>
                        </li>
                        <li>
                            <NavLink to={ARShowCaseRoutes.FILTRATION}>Filtration</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="show-case-components-container">
                <Outlet />
            </div>
        </div>
    );
};

export default ShowCase;
