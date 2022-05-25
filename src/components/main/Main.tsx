import React from "react";
import { Outlet } from "react-router-dom";
import BooksPage from "./booksPage/BooksPage";

import s from "./Main.module.scss";

interface IMainProps {
    children: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {
    return (
        <main id={s.main}>
            {/* <BooksPage /> */}
            {children}
            {/* <Outlet /> */}
        </main>
    );
};

export default Main;
