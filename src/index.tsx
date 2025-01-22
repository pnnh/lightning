import './index.scss';

import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import {ConsolePage} from "./console/page";
import {WelcomePage} from "@/welcome/welcome";
import {ImagesPage} from "@/tools/images/images";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<WelcomePage/>),
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
    {
        path: "/console",
        element: <ConsolePage/>,
    },
    {
        path: "/images",
        element: <ImagesPage/>,
    }
]);

const rootElement = document.getElementById("root")
if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
        <RouterProvider router={router}/>
);
