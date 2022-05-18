import React from "react";

import Menu from "./menu/Menu";
import Search from "./search/Search";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <div className={s.header_logo}>
                    <span>BOOKSTORE</span>
                </div>
                <Search />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
