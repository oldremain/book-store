import { useState, useEffect } from "react";
import axios from "axios";
import { incrementArrayBy } from "../helpers/books";
import { IBook } from "../components/main/booksPage/bookCard/BookCard";

//"https://api.itbook.store/1.0/new"

export const useNewBooks = (URL: string) => {
    const [status, setStatus] = useState({
        newBooks: [] as IBook[],
        loading: false,
        error: false,
    });

    const getBooks = async () => {
        setStatus({
            ...status,
            loading: true,
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, 500);
        });

        try {
            const response = await axios.get(URL);
            setStatus({
                ...status,
                newBooks: incrementArrayBy<IBook, number>(response.data.books, 9).filter(
                    (book) => +book.price.slice(1) //apply function and delete cards with price ($0.00)
                ),
                loading: false,
            });
        } catch (e: any) {
            setStatus({
                ...status,
                error: true,
            });
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return { ...status };
};
