import React from "react";

import UiTitle from "../../UI/title/UiTitle";
import BookCard from "./bookCard/BookCard";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    return (
        <div className={s.page_containter}>
            <UiTitle size="large">New Releases Books</UiTitle>
            <div className={s.cards_container}>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    );
};

export default BooksPage;
