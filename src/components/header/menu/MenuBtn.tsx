import React from "react";

interface IMenuBtnProps {
    cName: string;
    children: React.ReactNode;
    onClick: () => void;
}

const MenuBtn: React.FC<IMenuBtnProps> = ({ cName, children, onClick }) => {
    return (
        <button type="button" className={cName} onClick={onClick}>
            {children}
        </button>
    );
};

export default MenuBtn;
