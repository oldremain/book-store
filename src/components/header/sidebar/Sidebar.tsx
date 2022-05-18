import React from "react";

import Logo from "../logo/Logo";
import MenuItem from "../menu/MenuItem";
import Search from "../search/Search";
import MenuBtn from "../menu/MenuBtn";
import { ReactComponent as CartIcon } from "../../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../../../assets/headerIcons/CloseMenu.svg";

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
                    <MenuBtn
                        cName={s.close_menu}
                        children={<CloseMenuIcon />}
                        onClick={showSidebar}
                    />
                </nav>
            </div>
            <Search />
            <div className={s.sidebar_links}>
                <MenuItem href="/favourites" cName={s.sidebar_link} children={"Favourites"} />
                <MenuItem href="/cart" cName={s.sidebar_link} children={"Cart"} />
            </div>
        </div>
    );
};

export default Sidebar;
