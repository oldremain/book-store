import React from "react";
import { useMediaQuery } from "react-responsive";

import Logo from "./logo/Logo";
import Search from "./search/Search";
import Menu from "./menu/Menu";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    const isThablet = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <header id={s.header}>
            <div className={s.header_container}>
                <Logo cName={s.header_logo} />
                {!isThablet && <Search cName={["search"]}  id={'search-input-main'}/>} 
                <Menu />
            </div>
        </header>
    );
};

export default Header;
