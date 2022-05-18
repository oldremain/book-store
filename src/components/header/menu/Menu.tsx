import React, { useState } from "react";

import { ReactComponent as MenuBurgerIcon } from "../../../assets/headerIcons/MenuBurger.svg";
import MenuItem from "./MenuItem";
import MenuBtn from "./MenuBtn";
import { menuData } from "./menuData";

import s from "./Menu.module.scss";

const Menu: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const showSidebar = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <MenuBtn cName={s.burger_menu} children={<MenuBurgerIcon />} onClick={showSidebar} />
            {/* <button type="button" className={s.burger_menu}>
                <MenuBurgerIcon onClick={showSidebar} />
            </button> */}
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
