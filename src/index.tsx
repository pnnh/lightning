import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.scss';

import * as React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import {ConsolePage} from "./console/page";
import {WelcomePage} from "@/welcome/welcome";
import {ImagesPage} from "@/tools/images/images";
import {FilesPage} from "@/tools/files/files";
import ToolsLayout from "@/tools/layout";

const rootElement = document.getElementById("root")
if (!rootElement) {
    throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
        <Routes>
            <Route index={true} element={<WelcomePage/>}/>
            <Route path="console" element={<ConsolePage/>}/>
            <Route element={<ToolsLayout/>}>
                <Route path="files" index={true} element={<FilesPage/>}/>
                <Route path="images" element={<ImagesPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
