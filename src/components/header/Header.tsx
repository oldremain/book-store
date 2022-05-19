import React, { useState, useEffect } from "react";
import classnames from "classnames";

import Logo from "./logo/Logo";
import Search from "./search/Search";
import Menu from "./menu/Menu";

import s from "./Header.module.scss";

interface IHeaderProps {
    onClick: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onClick }) => {
    return (
        <header id={s.header}>
            <div className={s.header_container}>
                <Logo cName={s.header_logo} />
                <Search cName={["search", "search_header"]} />
                <Menu onClick={onClick} />
            </div>
        </header>
    );
};

export default Header;
