import React, { useState } from "react";
import { motion } from "framer-motion";

import s from "./BookDetails.module.scss";
import { variants } from "./motionVariants";
import { useMediaQuery } from "react-responsive";

interface IPreviewBook {
    // preview: { [key: string]: string };
    preview: string;
}

const PreviewBook: React.FC<IPreviewBook> = ({ preview }) => {
    // const [open, setOpen] = useState<boolean>(false);
    // const handleClick = () => setOpen((prev) => !prev);

    //const links = Object.values(preview);
    // const isMobile = useMediaQuery({ query: "(max-width: 472px)" });

    return (
        <div className={s.preview_container}>
            {/* <button onClick={handleClick} className={s.preview_btn}>
                Preview book
            </button> */}
            <a href={preview} className={s.preview_link} target="_blank" rel="noopener noreferrer">
                Preview book
            </a>

            {/* {open && (
                <motion.ul
                    className={s.preview_list}
                    variants={variants}
                    animate={isMobile ? "mobile" : "desktop"}
                >
                    {links.map(([title, description]) => (
                        <li key={title} className={s.preview_list_item}>
                            <a href={description} target="_blank" rel="noopener noreferrer">
                                {title}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            )} */}
        </div>
    );
};

export default PreviewBook;
