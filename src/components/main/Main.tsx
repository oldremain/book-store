import React from "react";
import BooksPage from "./booksPage/BooksPage";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <main id={s.main}>
            <BooksPage />
        </main>
    );
};

export default Main;
