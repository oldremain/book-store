import React from "react";
import { NavLink } from "react-router-dom";

import  './MenuItem.scss'

interface IMenuItemProps {
    href: string;
    cName: string;
    children: React.ReactNode;
    onClick?: () => void
}

const MenuItem: React.FC<IMenuItemProps> = ({ href, cName, children, onClick }) => {
    return (
        <NavLink to={href} className={cName} onClick={onClick}>
            {children}
        </NavLink>
    );
};

export default MenuItem;
