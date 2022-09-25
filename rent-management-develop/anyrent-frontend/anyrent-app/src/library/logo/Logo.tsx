import "./logo.less";
import { SvgIcon } from "../svgIcon/SvgIcon";

import logoDefault from "../../assets/styles/img/logoDefault.png";
import { MouseEventHandler } from "react";

export interface LogoProps {
    style?: "white-text" | "violetta-text";
    hover?: "hover" | "default";
    size?: "mini" | "default";
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Logo = (props: LogoProps) => {
    return (
        <div
            className={`ar-logo ar-logo--${props.hover === "hover" ? "hover" : "default"}`}
            onClick={(e) => {
                props.onClick!(e);
            }}
        >
            <div className={`ar-logo__icon-container--${props.size === "mini" ? "mini" : "default"}`}>
                <SvgIcon id={`logo-${props.size === "mini" ? "mini" : "default"}`} />
            </div>
            <span className={`logo__text--${props.style === "white-text" ? "white-text" : "violetta-text"}`}>AnyRent</span>
        </div>
    );
};

export default Logo;
