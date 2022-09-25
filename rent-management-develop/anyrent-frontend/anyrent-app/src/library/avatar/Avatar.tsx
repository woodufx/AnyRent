import React, { MouseEventHandler } from "react";
import "./avatar.less";

interface IAvatarProps {
    size: "small" | "medium" | "large";
    name: string;
    surname?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    hover?: boolean;
}

export const ARAvatar = ({ size, name, surname, onClick, hover }: IAvatarProps) => {
    return (
        <div onClick={(e) => onClick!(e)} className={`ar-user-avatar-${size} ${hover && "ar-user-avatar-hover"}`}>
            {surname? name[0].toUpperCase() + surname[0].toUpperCase() : name[0].toUpperCase() }
        </div>
    );
};
