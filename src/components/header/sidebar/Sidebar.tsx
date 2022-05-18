import React from "react";

import Logo from "../logo/Logo";
import MenuItem from "../menu/MenuItem";
import Search from "../search/Search";
import MenuBtn from "../menu/MenuBtn";
import { ReactComponent as CartIcon } from "../../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../../../assets/headerIcons/CloseMenu.svg";

import s from "./Sidebar.module.scss";

interface ISidebarProps {
    onClick: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ onClick }) => {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebar_nav}>
                <Logo cName={s.logo} />
                <MenuItem href="/cart" cName={s.nav_link} children={<CartIcon />} />
                <MenuBtn cName={s.close_menu} children={<CloseMenuIcon />} onClick={onClick} />
            </div>
            <Search />
            <div className={s.sidebar_links}>
                <MenuItem href="/favourites" cName={s.link} children={"Favourites"} />
                <MenuItem href="/cart" cName={s.link} children={"Cart"} />
            </div>
        </div>
    );
};

export default Sidebar;
