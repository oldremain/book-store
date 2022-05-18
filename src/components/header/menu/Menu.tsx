import React, { useState } from "react";
//import * as FaIcons from "react-icons/fa";

import { ReactComponent as FavouritesIcon } from "../../../assets/headerIcons/FavouritesIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../../assets/headerIcons/UserIcon.svg";
import { ReactComponent as MenuBurger } from "../../../assets/headerIcons/MenuBurger.svg";
import { menuData } from "./menuData";

import s from "./Menu.module.scss";

const Menu: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const showSidebar = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <button type="button" className={s.burger_menu}>
                <MenuBurger onClick={showSidebar} />
            </button>
            <nav className={s.nav_menu}>
                <ul className={s.menu_items}>
                    {menuData.map((item) => (
                        <li className={s.menu_item}>
                            <a href={item.path} className={s[item.cName]}>
                                {<item.icon />}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Menu;
