import { useState, useEffect } from "react";
import axios from "axios";
import { IBookProps } from "../components/main/booksPage/bookCard/BookCard";

//"https://api.itbook.store/1.0/new"

export const useNewBooks = (URL: string) => {
    const [status, setStatus] = useState({
        data: [] as IBookProps[],
        loading: false,
        error: false,
    });

    const getBooks = async () => {
        try {
            setStatus({
                ...status,
                loading: true,
            });
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(1);
                }, 3000);
            });
            const response = await axios.get(URL);
            setStatus({
                ...status,
                data: incrementArrayBy(response.data.books, 3),
                loading: false,
            });
        } catch (e: any) {
            setStatus({
                ...status,
                error: true,
            });
            return e.message;
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return { ...status };
};

function incrementArrayBy<T, U extends number>(array: T[], value: U): T[] {
    let initial: T[] = [];

    for (let i = 0; i < value; i++) {
        initial = [...initial, ...array];
    }

    return initial;
}
