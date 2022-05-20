import { useState, useEffect } from "react";
import axios from "axios";
import { IBookProps } from "../components/main/booksPage/bookCard/BookCard";

//"https://api.itbook.store/1.0/new"

export const useNewBooks = (URL: string) => {
    const [books, setBooks] = useState<IBookProps[]>([]);

    const getBooks = async () => {
        try {
            const response = await axios.get(URL);
            setBooks(incrementArrayBy(response.data.books, 3));
        } catch (e: any) {
            return e.message;
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return { books };
};

function incrementArrayBy<T, U extends number>(array: T[], value: U): T[] {
    let initial: T[] = [];

    for (let i = 0; i < value; i++) {
        initial = [...initial, ...array];
    }

    return initial;
}
