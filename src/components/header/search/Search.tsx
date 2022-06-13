import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { fetchBooks, setSearchField } from "../../../features/books/booksSlice";
import { toggleVisibility } from "../../../features/sidebar/sidebarSlice";
import cn from "classnames";

import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";

import s from "./Search.module.scss";

interface ISearchProps {
    cName: string[];
    id: string
}

const Search: React.FC<ISearchProps> = ({ cName, id }) => {
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
            dispatch(toggleVisibility(false)); // контролируем sidebar
            
            navigate(`/search/${book}`); //search/${searchField}/?page=${paginationPage}
            setBook("");
        }
    };

    return (
        <>
            <div className={cn(s[cName[0]], s[cName[1]], s[cName[2]])}>
                <form className={s.search_form} onSubmit={handleFormSubmit}>
                    <label htmlFor={id} hidden={true}>
                        Search by book title
                    </label>
                    <input
                        value={book}
                        onChange={handleInputChange}
                        type="text"
                        id={id}
                        placeholder="Search books by Title, Author or ISBN"
                        autoComplete="off"
                        className={s.search_input}
                    />
                    <button type="submit" className={s.search_button}>
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </>
    );
};

export default Search;
