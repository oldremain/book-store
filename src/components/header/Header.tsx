import React from "react";

import Menu from "./menu/Menu";
import Search from "./search/Search";
import Logo from "./logo/Logo";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <Logo cName={s.header_logo} />
                <Search />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
