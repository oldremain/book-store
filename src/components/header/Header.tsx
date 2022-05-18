import React, { useState, useEffect } from "react";

import Logo from "./logo/Logo";
import Search from "./search/Search";
import Menu from "./menu/Menu";
import Sidebar from "./sidebar/Sidebar";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const showSidebar = () => {
        setShow((state) => !state);
    };

    useEffect(() => {
        console.log(show);
    }, [show]);

    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <Logo cName={s.header_logo} />
                <Search />
                <Menu onClick={showSidebar} />
                {show && <Sidebar onClick={showSidebar} />}
            </div>
        </header>
    );
};

export default Header;
