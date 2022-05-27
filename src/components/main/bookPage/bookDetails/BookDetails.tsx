import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import UIBookRates, { IBookRatesProps } from "../../../UI/bookRates/UIBookRates";
import UIPrimaryButton from "../../../UI/button/UiPrimaryButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { UISize } from "../../../../enums/enums";
import { variants } from "./motionVariants";

import s from "./BookDetails.module.scss";
import { useAppSelector } from "../../../../hooks/reduxHooks";

//     "authors": "Julien Vehent"
//     "publisher": "Manning"
//     "year": "2018"
//     "language":"English"
const details = ["authors", "publisher", "year", "language"];

const BookDetails: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: "(max-width: 472px)" });

    const { data } = useAppSelector((state) => state.oneBook);

    //const preparedData = data.entries
    useEffect(() => {
        console.log(Object.entries(data).filter((el) => el[0]));
    }, []);

    const handleClick = () => setOpen((prev) => !prev);

    ///const detailsContent = Object.entries()

    const { price, authors, publisher, year, language, pages, isbn10, isbn13 } = useAppSelector(
        (state) => state.oneBook.data
    );

    const RenderedIcon = open ? (
        <KeyboardArrowUpIcon fontSize="small" />
    ) : (
        <KeyboardArrowDownIcon fontSize="small" />
    );

    return (
        <div className={s.details_container}>
            <div className={s.details}>
                <UIBookRates price={price} isbn13={isbn13} cName={`_${UISize.Large}`} />
                <ul className={s.details_list}>
                    <li className={s.list_item}>Authors</li>
                    <li className={s.list_item}> {authors}</li>
                    <li className={s.list_item}>Publisher</li>
                    <li className={s.list_item}>
                        {publisher}, {year}
                    </li>
                    <li className={s.list_item}>Language</li>
                    <li className={s.list_item}>{language}</li>
                    <li className={s.list_item}>Format</li>
                    <li className={s.list_item}>Paper book / ebook (PDF)</li>
                </ul>
                <div className={s.more_details}>
                    <button className={s.more_details_btn} onClick={handleClick}>
                        More details {RenderedIcon}
                    </button>
                    {open && (
                        <motion.ul
                            className={s.more_details_list}
                            variants={variants}
                            animate={isMobile ? "mobile" : "desktop"}
                        >
                            <li className={s.list_item}>pages</li>
                            <li className={s.list_item}>{pages}</li>
                            <li className={s.list_item}>ISBN-10</li>
                            <li className={s.list_item}>{isbn10}</li>
                            <li className={s.list_item}>ISBN-13</li>
                            <li className={s.list_item}>{isbn13}</li>
                        </motion.ul>
                    )}
                </div>
                <UIPrimaryButton text="Add to cart" />
            </div>
        </div>
    );
};

export default BookDetails;
