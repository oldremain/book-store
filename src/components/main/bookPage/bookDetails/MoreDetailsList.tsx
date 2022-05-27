import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import getPreparedData from "./helper";

import ListItem from "./ListItem";

import { variants } from "./motionVariants";

import s from "./BookDetails.module.scss";
import MoreDetailsButton from "./MoreDetailsButton";

const detailsFields: string[] = ["pages", "isbn10", "isbn13"];

const MoreDetailsList: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => setOpen((prev) => !prev);

    const { book } = useAppSelector((state) => state.oneBook);
    const preparedData = useMemo(() => getPreparedData(book, detailsFields), [detailsFields, book]);

    const isMobile = useMediaQuery({ query: "(max-width: 472px)" });

    return (
        <div className={s.more_details}>
            <MoreDetailsButton open={open} handleClick={handleClick} />
            {open && (
                <motion.ul
                    className={s.more_details_list}
                    variants={variants}
                    animate={isMobile ? "mobile" : "desktop"}
                >
                    {preparedData.map(([title, description]) => (
                        <ListItem key={title} title={title} description={description} />
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default MoreDetailsList;
