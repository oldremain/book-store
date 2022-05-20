import React from "react";
import { useNewBooks } from "../../../fetchAPI/useNewBooks";

import UiTitle from "../../UI/title/UiTitle";
import BookCard from "./bookCard/BookCard";

import { UITitleSize } from "../../../enums/enums";

import s from "./BooksPage.module.scss";

const URL = "https://api.itbook.store/1.0/new";

const BooksPage: React.FC = () => {
    const { books } = useNewBooks(URL);

    console.log(books.length);

    return (
        <div className={s.page_containter}>
            <UiTitle size={UITitleSize.Large}>New Releases Books</UiTitle>
            <div className={s.cards_container}>
                {books.map((book, i) => {
                    if (+book.price.slice(1)) {
                        //checkout price is not a null
                        return <BookCard key={book.isbn13 + i} {...book} />;
                    }
                })}
            </div>
        </div>
    );
};

export default BooksPage;
