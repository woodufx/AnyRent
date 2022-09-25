import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ComponentsList = () => {
  return (
    <div className="main-container">
      <div className="components-list">
        <h2>Components list:</h2>
        <div className="list">
          <ul>
            <li>
              <NavLink to={"/input"}>Input</NavLink>
            </li>
            <li>
              <NavLink to={"/pagination"}>Pagination</NavLink>
            </li>
            <li>
              <NavLink to={"/radio"}>Radio</NavLink>
            </li>
            <li>
              <NavLink to={"/checkbox"}>Checkbox</NavLink>
            </li>
            <li>
              <NavLink to={"/all-buttons"}>Buttons</NavLink>
            </li>
            <li>
              <NavLink to={"/popover"}>Popover</NavLink>
            </li>
            <li>
              <NavLink to={"/logo"}>Logo</NavLink>
            </li>
            <li>
              <NavLink to={"/login-form"}>Login form</NavLink>
            </li>
            <li>
              <NavLink to={"/loading"}>Loading</NavLink>
            </li>
            <li>
              <NavLink to={"/footer"}>Footer</NavLink>
            </li>
            <li>
              <NavLink to={"/dropdown"}>Dropdown</NavLink>
            </li>
            <li>
              <NavLink to={"/header"}>Header</NavLink>
            </li>
            <li>
              <NavLink to={"/equipment-card"}>Equipment Card</NavLink>
            </li>
            <li>
              <NavLink to={"/equipment-list"}>Equipment List</NavLink>
            </li>
            <li>
              <NavLink to={"/category-card"}>Category Card</NavLink>
            </li>
            <li>
              <NavLink to={"/category-list"}>Category List</NavLink>
            </li>
            <li>
              <NavLink to={"/rating"}>Rating component</NavLink>
            </li>
            <li>
              <NavLink to={"/panel"}>Parameters panel</NavLink>
            </li>
            <li>
              <NavLink to={"/time-picker"}>Parameters panel</NavLink>
            </li>
            <li>
              <NavLink to={"/Carousel"}>Carousel</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="components-container">
        <Outlet />
      </div>
    </div>
  );
};

export default ComponentsList;
