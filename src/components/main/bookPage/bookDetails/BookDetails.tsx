import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import UIBookRates, { IBookRatesProps } from "../../../UI/bookRates/UIBookRates";
import UIButton from "../../../UI/button/UIButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { UISize } from "../../../../enums/enums";
import { variants } from "./motionVariants";

import s from "./BookDetails.module.scss";

interface IBookDetailsProps extends IBookRatesProps {}

const BookDetails: React.FC<IBookDetailsProps> = ({ price, isbn }) => {
    const [open, setOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: "(max-width: 472px)" });

    const handleClick = () => setOpen((prev) => !prev);

    ///const detailsContent = Object.entries()

    const RenderedIcon = open ? (
        <KeyboardArrowUpIcon fontSize="small" />
    ) : (
        <KeyboardArrowDownIcon fontSize="small" />
    );

    return (
        <div className={s.details_container}>
            <div className={s.details}>
                <UIBookRates price={price} isbn={isbn} cName={`_${UISize.Large}`} />
                <ul className={s.details_list}>
                    <li className={s.list_item}>Authors</li>
                    <li className={s.list_item}> Lentin Joseph, Aleena Johny</li>
                    <li className={s.list_item}>Publisher</li>
                    <li className={s.list_item}> Apress, 2022</li>
                    <li className={s.list_item}>Language</li>
                    <li className={s.list_item}>English</li>
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
                            <li className={s.list_item}>isbn 10 :</li>
                            <li className={s.list_item}> 1617294136</li>
                            <li className={s.list_item}>isbn 13 :</li>
                            <li className={s.list_item}> 9781617294136</li>
                            <li className={s.list_item}>pages</li>
                            <li className={s.list_item}>384</li>
                        </motion.ul>
                    )}
                </div>
                <UIButton text="Add to cart" />
            </div>
        </div>
    );
};

export default BookDetails;
