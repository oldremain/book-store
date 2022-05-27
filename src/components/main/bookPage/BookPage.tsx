import React, { useEffect } from "react";

import BookDetails from "./bookDetails/BookDetails";
import UIBackButton from "../../UI/button/backButton/UiBackButton";
import UITitle from "../../UI/title/UiTitle";
import UIBookImage from "../../UI/bookImage/UIBookImage";

import { UISize } from "../../../enums/enums";

import s from "./BookPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchOneBook } from "../../../features/book/oneBookSlice";
import { useParams } from "react-router-dom";
import Loader from "../../loader/Loader";

const BookPage: React.FC = () => {
    const { isbn } = useParams();
    const dispatch = useAppDispatch();
    const { title, image } = useAppSelector((state) => state.oneBook.data);
    const isLoading = useAppSelector((state) => state.oneBook.loading);

    useEffect(() => {
        dispatch(fetchOneBook(isbn));
    }, [isbn]);

    // useEffect(() => {
    //     console.log(isbn);
    // }, [isbn]);

    return (
        <section className={s.containter}>
            <UIBackButton />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h2 className={s.title}>
                        <UITitle size={UISize.Large} children={title} />
                    </h2>
                    <div className={s.content}>
                        <div className={s.content_image}>
                            <UIBookImage size={UISize.Large} theme="orange" image={image} />
                        </div>
                        <BookDetails />
                    </div>
                </>
            )}
        </section>
    );
};

export default BookPage;
