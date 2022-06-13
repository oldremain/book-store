import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet, useLocation } from "react-router-dom";

import Search from "../../header/search/Search";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    const location = useLocation()
    const isAccountPage = location.pathname.startsWith('/account')

    const isThablet = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div className={s.page_containter}>
            {isThablet && !isAccountPage && 
                <Search 
                    cName={["search", "search_main"]} 
                    id={'search-input-main'}
                />}
            <Outlet />
        </div>
    );
};

export default BooksPage;
