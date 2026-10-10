import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import App from "./App.jsx";
import styles from "./styles/reset.module.scss";
createRoot(document.getElementById("root")).render(
    <HashRouter>
        <App />
    </HashRouter>,
);
