import { useState, useEffect } from "react";
import axios from "axios";
import { IBookProps } from "../components/main/booksPage/bookCard/BookCard";

//"https://api.itbook.store/1.0/new"

export const useNewBooks = (URL: string) => {
    const [status, setStatus] = useState({
        newBooks: [] as IBookProps[],
        loading: false,
        error: false,
    });

    const getBooks = async () => {
        setStatus({
            ...status,
            loading: true,
        });

        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(1);
        //     }, 3000);
        // });

        try {
            const response = await axios.get(URL);
            setStatus({
                ...status,
                newBooks: incrementArrayBy<IBookProps, number>(response.data.books, 3).filter(
                    (book) => +book.price.slice(1) //delete cards with price ($0.00)
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

//Функция для увеличения длины массива, т.к хотелось получить больше items
function incrementArrayBy<T, U extends number>(array: T[], value: U): T[] {
    let initial: T[] = [];

    for (let i = 0; i < value; i++) {
        initial = [...initial, ...array];
    }

    return initial;
}
