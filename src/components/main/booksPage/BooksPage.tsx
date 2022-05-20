import React, { useEffect } from "react";
import { useNewBooks } from "../../../fetchAPI/useNewBooks";
import { useFilter } from "../../../hooks/useFilter";

import UiTitle from "../../UI/title/UiTitle";
import BookCard from "./bookCard/BookCard";
import CustomPagination from "../../../pagination/Pagination";
import Loader from "../../loader/Loader";

import { UITitleSize } from "../../../enums/enums";
import { BASE_URL } from "../../../constants/constants";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    const { newBooks, loading } = useNewBooks(`${BASE_URL}/new`);

    const { page, handleChangePage } = useFilter();

    // useEffect(() => {
    //     console.log(page);
    // }, [page]);

    const content = newBooks
        .slice((page - 1) * 10, page * 10)
        .map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);

    return (
        <div className={s.page_containter}>
            <UiTitle size={UITitleSize.Large}>New Releases Books ({newBooks.length})</UiTitle>
            <CustomPagination
                page={page}
                handleChange={handleChangePage}
                itemsCount={newBooks.length}
            />
            <div className={s.cards_container}>{loading ? <Loader /> : content}</div>
        </div>
    );
};

export default BooksPage;
