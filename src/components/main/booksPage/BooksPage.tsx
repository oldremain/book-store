import React from "react";
import { useNewBooks } from "../../../fetchAPI/useNewBooks";

import UiTitle from "../../UI/title/UiTitle";
import BookCard from "./bookCard/BookCard";

import { UITitleSize } from "../../../enums/enums";
import { BASE_URL } from "../../../constants/constants";

import s from "./BooksPage.module.scss";
import Loader from "../../loader/Loader";

const BooksPage: React.FC = () => {
    const { data, loading } = useNewBooks(`${BASE_URL}/new`);

    const content = data.map((book, i) => {
        if (+book.price.slice(1)) {
            //checkout price is not a null
            return <BookCard key={book.isbn13 + i} {...book} />;
        }
    });

    console.log(data.length);

    return (
        <div className={s.page_containter}>
            <UiTitle size={UITitleSize.Large}>New Releases Books</UiTitle>
            <div className={s.cards_container}>{loading ? <Loader /> : content}</div>
        </div>
    );
};

export default BooksPage;
