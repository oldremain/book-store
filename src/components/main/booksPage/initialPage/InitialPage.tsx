import React, { useEffect } from "react";
import { useNewBooks } from "../../../../fetchAPI/useNewBooks";
import { useFilter } from "../../../../hooks/useFilter";

import UITitle from "../../../UI/title/UITitle";
import BookCard from "../bookCard/BookCard";
import CustomPagination from "../../../UI/pagination/Pagination";
import SelectControl from "../../../UI/select/Select";
import Loader from "../../../loader/Loader";

import { UISize } from "../../../../enums/enums";
import { BASE_URL } from "../../../../constants/constants";

import s from "../BooksPage.module.scss";

const InitialPage: React.FC = () => {
    const { newBooks, loading } = useNewBooks(`${BASE_URL}/new`);

    const { page, pageSize, handleChangeSize, handleChangePage } = useFilter();

    // useEffect(() => {
    //     console.log(searchBooks);
    // }, [searchBooks]);

    const content = newBooks
        .slice((page - 1) * +pageSize, page * +pageSize)
        .map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);

    return (
        <section className={s.page_containter}>
            <h2>
                <UITitle size={UISize.Large}>New Releases Books ({newBooks.length})</UITitle>
            </h2>
            <SelectControl pageSize={pageSize} handleChange={handleChangeSize} />
            <div className={s.cards_container}>{loading ? <Loader /> : content}</div>
            <CustomPagination
                page={page}
                pageSize={+pageSize}
                handleChange={handleChangePage}
                itemsCount={newBooks.length}
            />
        </section>
    );
};

export default InitialPage;
