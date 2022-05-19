import axios from "axios";
import { useState, useEffect } from "react";

type NewBookResponseType = {
    [key: string]: string;
};

export const useNewBooks = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const response = await axios.get("https://api.itbook.store/1.0/new");
            setBooks(response.data.books);
        } catch (e: any) {
            return e.message;
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return books;
};
