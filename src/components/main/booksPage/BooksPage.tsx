import React, { useEffect } from "react";

import Search from "../../header/search/Search";

import InitialPage from "./initialPage/InitialPage";
import ResultsPage from "./resultsPage/ResultsPage";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    return (
        <section className={s.page_containter}>
            <Search cName={["search", "search_main"]} />
            {/* <InitialPage /> */}
            <ResultsPage />
        </section>
    );
};

export default BooksPage;
