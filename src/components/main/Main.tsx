import React from "react";
import { Outlet } from "react-router-dom";
import BooksPage from "./booksPage/BooksPage";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <main id={s.main}>
            {/* <BooksPage /> */}
            <Outlet />
        </main>
    );
};

export default Main;
