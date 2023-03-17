import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Login from "./login";
import App from "./components/sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Indexpage from "./components/Narbar_menu";

const rootElement = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
rootElement.render(
    <React.StrictMode>
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    </React.StrictMode>);

reportWebVitals();

