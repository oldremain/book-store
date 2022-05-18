import React from "react";
import Logo from "../logo/Logo";
import MenuItem from "../menu/MenuItem";
import Search from "../search/Search";
import { ReactComponent as CartIcon } from "../../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as CloseMenu } from "../../../assets/headerIcons/CloseMenu.svg";

import s from "./Sidebar.module.scss";

interface ISidebarProps {
    showSidebar: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ showSidebar }) => {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebar_nav}>
                <Logo cName={s.sidebar_logo} />
                <nav className={s.nav_items}>
                    <MenuItem href="/cart" cName={s.nav_link} children={<CartIcon />} />
                    <button type="button" className={s.burger_menu}>
                        <CloseMenu onClick={showSidebar} />
                    </button>
                </nav>
            </div>
            <Search />
        </div>
    );
};

export default Sidebar;
