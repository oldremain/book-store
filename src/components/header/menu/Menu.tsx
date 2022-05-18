import React, { useEffect, useState } from "react";

import { ReactComponent as MenuBurgerIcon } from "../../../assets/headerIcons/MenuBurger.svg";
import MenuItem from "./MenuItem";
import MenuBtn from "./MenuBtn";
import { menuData } from "./menuData";

import s from "./Menu.module.scss";

interface IMenuProps {
    onClick: () => void;
}

const Menu: React.FC<IMenuProps> = ({ onClick }) => {
    return (
        <>
            <MenuBtn cName={s.burger_menu} children={<MenuBurgerIcon />} onClick={onClick} />
            <nav className={s.nav_menu}>
                <ul className={s.menu_items}>
                    {menuData.map((item, i) => (
                        <li key={item.path + i} className={s.menu_item}>
                            <MenuItem
                                href={item.path}
                                cName={s[item.cName]}
                                children={<item.icon />}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Menu;
