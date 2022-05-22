import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";

import Logo from "../header/logo/Logo";
import MenuItem from "../header/menu/MenuItem";
import Search from "../header/search/Search";
import MenuBtn from "../header/menu/MenuBtn";
import UIButton from "../UI/button/UIButton";
import { ReactComponent as CartIcon } from "../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../../assets/headerIcons/CloseMenu.svg";

import s from "./Sidebar.module.scss";

interface ISidebarProps {
    open: boolean;
    onClick: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ open, onClick }) => {
    return (
        <>
            <motion.div className={s.sidebar} animate={{ x: ["100%", "0%"] }}>
                <div className={s.sidebar_content}>
                    <div className={s.sidebar_nav}>
                        <Logo cName={s.logo} />
                        <MenuItem href="/cart" cName={s.nav_link} children={<CartIcon />} />
                        <MenuBtn
                            cName={s.close_menu}
                            children={<CloseMenuIcon />}
                            onClick={onClick}
                        />
                    </div>
                    <Search cName={["search", "search_sidebar"]} />
                    <div className={s.sidebar_links}>
                        <MenuItem href="/favourites" cName={s.link} children={"Favourites"} />
                        <MenuItem href="/cart" cName={s.link} children={"Cart"} />
                    </div>
                    <UIButton text="Sign In" cNameBtn="ui_btn_sidebar" />
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
