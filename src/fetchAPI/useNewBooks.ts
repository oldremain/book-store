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
            error: false,
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, 100);
        });

        try {
            const response = await axios.get(URL);
            setStatus({
                ...status,
                newBooks: incrementArrayBy<IBook, number>(response.data.books, 4), //увеличение числа элементов массива, по дефолту - 20
                loading: false,
            });
        } catch (e: any) {
            setStatus({
                ...status,
                error: true,
                loading: false,
            });
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return { ...status };
};
