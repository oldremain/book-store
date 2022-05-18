import React from "react";
import Header from "./components/header/Header";

import s from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={s.app_container}>
            <Header />
        </div>
    );
};

export default App;
