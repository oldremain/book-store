import React, { useMemo } from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import getPreparedData from "./helper";

import ListItem from "./ListItem";

import s from "./BookDetails.module.scss";

const detailsData: string[] = ["authors", "publisher", "year", "language"];

const DetailsList: React.FC = () => {
    const { book } = useAppSelector((state) => state.oneBook);
    const preparedData = useMemo(() => {
        return getPreparedData(book, detailsData)
    }, [book]);

    return (
        <ul className={s.details_list}>
            {preparedData.map(([title, description]) => (
                <ListItem key={title} title={title} description={description} />
            ))}
        </ul>
    );
};

export default DetailsList;
