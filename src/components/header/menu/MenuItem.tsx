import React from "react";
import { Link } from "react-router-dom";

interface IMenuItemProps {
    href: string;
    cName: string;
    children: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({ href, cName, children }) => {
    return (
        <Link to={href} className={cName}>
            {children}
        </Link>
    );
};

export default MenuItem;
