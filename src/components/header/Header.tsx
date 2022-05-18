import React from "react";

import Menu from "./menu/Menu";
import Searchbar from "./searchbar/Searchbar";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <div className={s.header_logo}>
                    <span>BOOKSTORE</span>
                </div>
                <Searchbar />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
