import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Routes } from "../routes/Routes";
import { Reducer } from "../global/RootReducer";

export const App = () => {
    return (
        <Provider store={Reducer}>
            <React.Fragment>
                <Routes />
            </React.Fragment>
        </Provider>
    );
};


