import React, { useState } from "react";

import { ReactComponent as SearchIcon } from "../../../assets/headerIcons/SearchIcon.svg";

import s from "./Search.module.scss";

const Search: React.FC = () => {
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

    return (
        <div className={s.header_search}>
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
