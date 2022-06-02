import React from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { toggleVisibility } from "../../features/sidebar/sidebarSlice";
import { motion } from "framer-motion";

import Logo from "../header/logo/Logo";
import MenuItem from "../header/menu/menuItem/MenuItem";
import Search from "../header/search/Search";
import MenuBtn from "../header/menu/MenuBtn";
import UIPrimaryButton from "../UI/button/UiPrimaryButton";
import { ReactComponent as CartIcon } from "../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../../assets/headerIcons/CloseMenu.svg";

import s from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleBtnClick = () => {
        dispatch(toggleVisibility());
    };

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
                            onClick={handleBtnClick}
                        />
                    </div>
                    <Search cName={["search", "search_sidebar"]} />
                    <div className={s.sidebar_links}>
                        <MenuItem href="/favourites" cName={s.link} children={"Favourites"} />
                        <MenuItem href="/cart" cName={s.link} children={"Cart"} />
                    </div>
                    <UIPrimaryButton text="Sign In" cNameBtn="ui_btn_sidebar" />
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
