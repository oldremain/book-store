import React from "react";

interface IMenuItemProps {
    href: string;
    cName: string;
    children: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({ href, cName, children }) => {
    return (
        <a href={href} className={cName}>
            {children}
        </a>
    );
};

export default MenuItem;
