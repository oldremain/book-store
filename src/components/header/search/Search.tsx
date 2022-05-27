import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { fetchBooks, setPage, setSearchField } from "../../../features/books/booksSlice";
import { toggleVisibility } from "../../../features/sidebar/sidebarSlice";
import cn from "classnames";

import { ReactComponent as SearchIcon } from "../../../assets/headerIcons/SearchIcon.svg";

import s from "./Search.module.scss";

interface ISearchProps {
    cName: string[];
}

const Search: React.FC<ISearchProps> = ({ cName }) => {
    const [book, setBook] = useState<string>("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBook(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (book.trim()) {
            dispatch(fetchBooks({ searchField: book, page: 1 }));
            dispatch(setSearchField(book));
            dispatch(toggleVisibility(false));
        }
        navigate(`/search/${book}`); //search/${searchField}/?page=${paginationPage}
        setBook("");
    };

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
