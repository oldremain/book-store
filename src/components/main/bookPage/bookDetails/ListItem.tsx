import React from "react";

import s from "./BookDetails.module.scss";

interface IListItem {
    title: string;
    description: string;
}

const ListItem: React.FC<IListItem> = ({ title, description }) => {
    return (
        <>
            <li className={s.list_item}>{title}</li>
            <li className={s.list_item}>{description}</li>
        </>
    );
};

export default ListItem;
