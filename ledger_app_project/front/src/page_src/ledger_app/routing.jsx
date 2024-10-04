// C:\Users\atsushi_sakata\Desktop\帳簿アプリ\ledger_app_project\front\src/page_src/ledger_app/js/main.js
// import { Ranking } from "./page_src/ledger_app/js/ranking";
// import { Login } from "./page_src/ledger_app/js/login";

// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from './js/main.jsx'
import Ranking from './js/ranking.js'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Hello} />
                    main_hello_page
                <Route />
                <Route path = "/ranking" Component={Ranking}>
                    ranking page
                </Route>
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;