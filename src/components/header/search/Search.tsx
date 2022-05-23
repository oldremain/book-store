import React, { useEffect, useState } from "react";
import cn from "classnames";
import { fetchBooks } from "../../../features/books/booksSlice";

import { ReactComponent as SearchIcon } from "../../../assets/headerIcons/SearchIcon.svg";

import s from "./Search.module.scss";

interface ISearchProps {
    cName: string[];
}

const Search: React.FC<ISearchProps> = ({ cName }) => {
    const [book, setBook] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBook(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (book) {
            setBook("");
        }
    };

    // useEffect(() => {
    //     console.log(book);
    // }, [book]);

    return (
        <div className={cn(s[cName[0]], s[cName[1]])}>
            <form className={s.search_form} onSubmit={handleFormSubmit}>
                <label htmlFor="search-input" hidden={true}>
                    Search by book title
                </label>
                <input
                    value={book}
                    onChange={handleInputChange}
                    type="text"
                    id="search-input"
                    placeholder="Search"
                    autoComplete="off"
                    className={s.search_input}
                />
                <button type="submit" className={s.search_button}>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default Search;
