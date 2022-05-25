import React from "react";

import Logo from "./logo/Logo";
import Search from "./search/Search";
import Menu from "./menu/Menu";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header id={s.header}>
            <div className={s.header_container}>
                <Logo cName={s.header_logo} />
                <Search cName={["search", "search_header"]} />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
