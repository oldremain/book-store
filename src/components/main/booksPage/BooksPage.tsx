import React from "react";
import { useNewBooks } from "../../../fetchAPI/useNewBooks";

import UiTitle from "../../UI/title/UiTitle";
import BookCard from "./bookCard/BookCard";
import CustomPagination from "../../../pagination/Pagination";

import { UITitleSize } from "../../../enums/enums";
import { BASE_URL } from "../../../constants/constants";

import s from "./BooksPage.module.scss";
import Loader from "../../loader/Loader";

const BooksPage: React.FC = () => {
    const { newBooks, loading } = useNewBooks(`${BASE_URL}/new`);

    const content = newBooks
        .filter((book) => +book.price.slice(1)) //checkout price is not a null
        .map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);

    return (
        <div className={s.page_containter}>
            <UiTitle size={UITitleSize.Large}>New Releases Books ({content.length})</UiTitle>
            <CustomPagination />
            <div className={s.cards_container}>{loading ? <Loader /> : content}</div>
        </div>
    );
};

export default BooksPage;
