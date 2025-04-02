import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './localhost.scss';

import * as React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import {ConsolePage} from "./console/page";
import {WelcomePage} from "@/welcome/welcome";
import {ImagesPage} from "@/tools/images/images";
import {FilesPage} from "@/tools/files/files";
import ToolsLayout from "@/tools/layout";
import {HighlightPage} from "@/tools/highlight/page";

import {useBaseUrlWithSuffix} from "@/config/browser";
import BasexPage from "@/tools/basex/basex";
import {PasswordPage} from "@/tools/password/page";
import {UuidPage} from "@/tools/uuid/page";

const rootElement = document.getElementById("root")
if (!rootElement) {
    throw new Error("Root element not found");
}
const baseUrl = useBaseUrlWithSuffix()

ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
        <Routes>
            <Route index={true} path={baseUrl} element={<WelcomePage/>}/>
            <Route path={`${baseUrl}console`} element={<ConsolePage/>}/>
            <Route element={<ToolsLayout/>}>
                <Route path={`${baseUrl}files`} index={true} element={<FilesPage/>}/>
                <Route path={`${baseUrl}images`} element={<ImagesPage/>}/>
                <Route path={`${baseUrl}highlight`} element={<HighlightPage/>}/>
                <Route path={`${baseUrl}basex`} element={<BasexPage/>}/>
                <Route path={`${baseUrl}uuid`} element={<UuidPage/>}/>
                <Route path={`${baseUrl}password`} element={<PasswordPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
