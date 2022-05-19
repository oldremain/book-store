import React, { useEffect, useState } from "react";
import axios from "axios";

import UiTitle from "../../UI/title/UiTitle";
import BookCard from "./bookCard/BookCard";

import { UITitleSize } from "../../../enums/enums";
import { IBookType } from "./bookCard/BookCard";

import s from "./BooksPage.module.scss";

const BooksPage: React.FC = () => {
    const [books, setBooks] = useState<IBookType[]>([]);

    useEffect(() => {
        axios
            .get("https://api.itbook.store/1.0/new")
            .then((response) => {
                const results = response.data.books as IBookType[];
                setBooks(results);
            })
            .catch((e: any) => e.message);
    }, []);

    return (
        <div className={s.page_containter}>
            <UiTitle size={UITitleSize.Large}>New Releases Books</UiTitle>
            <div className={s.cards_container}>
                {!!books.length &&
                    books.map((book) => {
                        if (+book.price.slice(1)) {
                            //checkout price is not a null
                            return <BookCard key={book.isbn13} {...book} />;
                        }
                    })}
            </div>
        </div>
    );
};

export default BooksPage;
