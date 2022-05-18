import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

import { ReactComponent as FavouritesIcon } from "../../../assets/headerIcons/FavouritesIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../../assets/headerIcons/UserIcon.svg";
import { menuData } from "./menuData";

import s from "./Menu.module.scss";

const Menu: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const showSidebar = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <button type="button" className={s.burger_btn}>
                <FaIcons.FaBars onClick={showSidebar} />
            </button>
            <nav className={s.nav_menu}>
                <ul className={s.menu_list}>
                    {menuData.map((item) => (
                        <li className={s.list_item}>
                            <a href={item.path} className={s[item.cName]}>
                                {<item.icon />}
                            </a>
                        </li>
                    ))}
                    {/* <li className={s.list_item}>
                        <a href="#" className={s.btn}>
                            <FavouritesIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={s.btn}>
                            <CartIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={s.btn}>
                            <UserIcon />
                        </a>
                    </li> */}
                </ul>
            </nav>
        </>
    );
};

export default Menu;
