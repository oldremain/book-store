import React from "react";

import UiTitle from "../../UI/title/UiTitle";
import BookCard from "./bookCard/BookCard";
import { UITitleSize } from "../../../enums/enums";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    return (
        <div className={s.page_containter}>
            <UiTitle size={UITitleSize.Large}>New Releases Books</UiTitle>
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
