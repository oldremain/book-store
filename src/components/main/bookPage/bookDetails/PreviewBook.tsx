import React from "react";

import s from "./BookDetails.module.scss";

interface IPreviewBook {
    preview: string;
}

const PreviewBook: React.FC<IPreviewBook> = ({ preview }) => {
    return (
        <div className={s.preview_container}>
            <a href={preview} className={s.preview_link} target="_blank" rel="noopener noreferrer">
                Preview book
            </a>
        </div>
    );
};

export default PreviewBook;
