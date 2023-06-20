import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Header } from "../components/Header";
import { Marvel } from "../pages/Marvel";
import { Detail } from "../pages/Detail";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Marvel />,
                errorElement: <NotFound />
            },
            {
                path: "/detail/:id",
                element: <Detail />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Routes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


