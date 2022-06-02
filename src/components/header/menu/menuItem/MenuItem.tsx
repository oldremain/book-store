import React from "react";
import { NavLink } from "react-router-dom";

import  './MenuItem.scss'

interface IMenuItemProps {
    href: string;
    cName: string;
    children: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({ href, cName, children }) => {
    return (
        <NavLink to={href} className={cName}>
            {children}
        </NavLink>
    );
};

export default MenuItem;
