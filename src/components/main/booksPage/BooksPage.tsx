import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import Search from "../../header/search/Search";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    const isThablet = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div className={s.page_containter}>
            {isThablet && <Search cName={["search", "search_main", 'search_account']} />}
            <Outlet />
        </div>
    );
};

export default BooksPage;
