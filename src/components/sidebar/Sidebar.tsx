import React from "react";
import cn from "classnames";

import Logo from "../header/logo/Logo";
import MenuItem from "../header/menu/MenuItem";
import Search from "../header/search/Search";
import MenuBtn from "../header/menu/MenuBtn";
import { ReactComponent as CartIcon } from "../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../../assets/headerIcons/CloseMenu.svg";

import s from "./Sidebar.module.scss";

interface ISidebarProps {
    open: boolean;
    onClick: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ open, onClick }) => {
    return (
        <div className={s.sidebar}>
            <div className={cn(s.sidebar_content, { _active: open })}>
                <div className={s.sidebar_nav}>
                    <Logo cName={s.logo} />
                    <MenuItem href="/cart" cName={s.nav_link} children={<CartIcon />} />
                    <MenuBtn cName={s.close_menu} children={<CloseMenuIcon />} onClick={onClick} />
                </div>
                <Search cName={["search", "search_sidebar"]} />
                <div className={s.sidebar_links}>
                    <MenuItem href="/favourites" cName={s.link} children={"Favourites"} />
                    <MenuItem href="/cart" cName={s.link} children={"Cart"} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
