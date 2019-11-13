import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
import "./styles/app.css";
import { Provider } from "react-redux";
import { ModalProvider } from "react-modal-hook";
import { createAppStore } from "./state/store";

const root = document.createElement("div");
root.setAttribute("id", "workout-app-root");

document.body.appendChild(root);

const store = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <ModalProvider>
            <App />
        </ModalProvider>
    </Provider>,
    root
);