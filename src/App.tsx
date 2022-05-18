import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/header/sidebar/Sidebar";

import s from "./App.module.scss";

const App: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const showSidebar = () => {
        setShow((state) => !state);
    };

    // useEffect(() => {
    //     console.log(show);
    // }, [show]);

    return (
        <div className={s.app_container}>
            <Header onClick={showSidebar} />
            {show && <Sidebar onClick={showSidebar} />}
        </div>
    );
};

export default App;
