import React from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { toggleVisibility } from "../../../features/sidebar/sidebarSlice";

import MenuItem from "./menuItem/MenuItem";
import MenuBtn from "./MenuBtn";
import { menuData } from "./menuData";
import { ReactComponent as MenuBurgerIcon } from "../../../assets/MenuBurgerIcon.svg";

import s from "./Menu.module.scss";

const Menu: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleMenuClick = () => {
        dispatch(toggleVisibility());
    };

    return (
        <>
            <nav className={s.nav_menu}>
                <ul className={s.menu_items}>
                    {menuData.map((item) => (
                        <li key={item.id} className={s.menu_item}>
                            <MenuItem
                                href={item.path}
                                cName={s[item.cName]}
                                children={<item.icon />}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
            <MenuBtn
                cName={s.burger_menu}
                children={<MenuBurgerIcon />}
                onClick={handleMenuClick}
            />
        </>
    );
};

export default Menu;
