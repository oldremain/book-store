import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

import s from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./components/main/booksPage/BooksPage";
import InitialPage from "./components/main/booksPage/initialPage/InitialPage";
import ResultsPage from "./components/main/booksPage/resultsPage/ResultsPage";

const App: React.FC = () => {
    const [isShown, setShowSidebar] = useState<boolean>(false);

    const handleShowSidebar = () => {
        setShowSidebar((state) => !state);
    };

    // useEffect(() => {
    //     console.log(show);
    // }, [show]);

    return (
        <BrowserRouter>
            <div className={s.app_container} style={{ overflow: isShown ? "hidden" : "visible" }}>
                <Header onClick={handleShowSidebar} />

                {isShown && <Sidebar onClick={handleShowSidebar} open={isShown} />}

                <Main>
                    <Routes>
                        <Route path="/" element={<BooksPage />}>
                            <Route index element={<InitialPage />} />
                            <Route path="new/:page" element={<InitialPage />} />
                            <Route path="search/*" element={<ResultsPage />} />
                        </Route>
                    </Routes>
                </Main>

                {/* <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="/" element={<BooksPage />}>
                            <Route index element={<InitialPage />} />
                            <Route path="new/:page" element={<InitialPage />} />
                            <Route path="search/*" element={<ResultsPage />} />
                        </Route>
                    </Route>
                </Routes> */}
            </div>
        </BrowserRouter>
    );
};

export default App;
