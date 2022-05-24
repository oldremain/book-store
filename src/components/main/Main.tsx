import React from "react";
import BooksPage from "./booksPage/BooksPage";
import BookPage from "./bookPage/BookPage";

import s from "./Main.module.scss";
import { Route, Routes } from "react-router-dom";

const Main: React.FC = () => {
    return (
        <main id={s.main}>
            <Routes>
                <Route path="/*" element={<BooksPage />} />
                {/* <BooksPage /> */}
                {/* <BookPage /> */}
            </Routes>
        </main>
    );
};

export default Main;
