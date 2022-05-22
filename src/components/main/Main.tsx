import React from "react";
import BooksPage from "./booksPage/BooksPage";
import BookPage from "./bookPage/BookPage";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <main id={s.main}>
            {/* <BooksPage /> */}
            <BookPage />
        </main>
    );
};

export default Main;
