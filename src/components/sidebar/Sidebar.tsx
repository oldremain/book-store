import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { toggleVisibility } from "../../features/sidebar/sidebarSlice";
import { motion } from "framer-motion";

import Logo from "../header/logo/Logo";
import MenuItem from "../header/menu/menuItem/MenuItem";
import Search from "../header/search/Search";
import MenuBtn from "../header/menu/MenuBtn";
import UIPrimaryButton from "../UI/button/UiPrimaryButton";
import { ReactComponent as CartIcon } from "../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../../assets/CloseMenuIcon.svg";

import s from "./Sidebar.module.scss";
import { logOut } from "../../features/auth/authSlice";
import { useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector(state => state.auth.isLogged)
    const location = useLocation()

    const handleCloseClick = () => {
        dispatch(toggleVisibility());
    };

    const handleLoggedClick = () => {
        dispatch(logOut())
        dispatch(toggleVisibility(false));
    }

    const handleLinkClick = () => {
        dispatch(toggleVisibility(false));
    }

    // useEffect(() => {
    //     dispatch(toggleVisibility());
    // }, [location.pathname])

    return (
        <>
            <motion.div className={s.sidebar} animate={{ x: ["100%", "0%"] }}>
                <div className={s.sidebar_content}>
                    <div className={s.sidebar_nav}>
                        {/* <Logo cName={s.logo} />
                        <MenuItem href="/cart" cName={s.nav_link} children={<CartIcon />} /> */}
                        <MenuBtn
                            cName={s.close_menu}
                            children={<CloseMenuIcon />}
                            onClick={handleCloseClick}
                        />
                    </div>
                    <Search 
                        cName={["search", "search_sidebar"]} 
                        id={'search-input-sidebar'} 
                    />
                    <div className={s.sidebar_links}>
                        <MenuItem 
                            href="/favourites" 
                            cName={s.link} 
                            onClick={handleLinkClick}
                            children={"Favourites"} 
                        />
                        <MenuItem 
                            href="/cart" 
                            cName={s.link} 
                            onClick={handleLinkClick}
                            children={"Cart"} 
                        />
                    </div>
                    <UIPrimaryButton 
                        text={`${isLogged ? "Log Out" : "Sign In"}`} 
                        cNameBtn="ui_btn_sidebar"
                        onClick={handleLoggedClick}
                     />
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
