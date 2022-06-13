import React from "react";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { toggleVisibility } from "../../features/sidebar/sidebarSlice";
import { logOut } from "../../features/auth/authSlice";
import { motion } from "framer-motion";

import Logo from "../header/logo/Logo";
import MenuItem from "../header/menu/menuItem/MenuItem";
import Search from "../header/search/Search";
import MenuBtn from "../header/menu/MenuBtn";
import UIPrimaryButton from "../UI/button/UiPrimaryButton";
import { ReactComponent as CloseMenuIcon } from "../../assets/CloseMenuIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/CartIcon.svg";

import s from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector(state => state.auth.isLogged)
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

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

    return (
        <>
            <motion.div className={s.sidebar} animate={{ x: ["100%", "0%"] }}>
                <div className={s.sidebar_content}>
                    <div className={s.sidebar_nav}>
                        {isMobile && 
                        <>
                            <Logo 
                                cName={s.logo} 
                                onClick={handleLinkClick}
                            />
                            <MenuItem 
                                href="/cart" 
                                cName={s.nav_link} 
                                children={<CartIcon />} 
                                onClick={handleLinkClick}
                            />
                        </>}
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
