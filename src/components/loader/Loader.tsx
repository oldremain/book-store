import React from "react";

import s from "./Loader.module.scss";

const Loader: React.FC = () => {
    return (
        <div className={s.loader_container}>
            <div className={s.loader} />
        </div>
    );
};

export default Loader;
