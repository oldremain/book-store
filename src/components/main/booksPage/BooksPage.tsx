import React from "react";
import { Outlet } from "react-router-dom";

import Search from "../../header/search/Search";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    return (
        <section className={s.page_containter}>
            <Search cName={["search", "search_main"]} />
            <Outlet />
        </section>
    );
};

export default BooksPage;
