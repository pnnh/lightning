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

import {CodeOk, PLSelectResult} from "@/atom/common/models/protocol";
import {PSFileModel} from "@/atom/common/models/filesystem";
import {IAppConfig} from "@/services/common/config";
import {BrowserDirectoryDrive, ISelectFilesOptions} from "@/services/drive";
import {PSArticleModel} from "@/atom/common/models/article";
import {useBaseUrlWithSuffix} from "@/config/browser";
import BasexPage from "@/tools/basex/basex";
import {PasswordPage} from "@/tools/password/page";
import {UuidPage} from "@/tools/uuid/page";


function storeArticle(article: PSArticleModel): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        // window.BridgeAPI.storeArticle(article).then(() => {
        //     resolve()
        // }).catch((error) => {
        //     reject(error)
        // })
    })
}


const fileDrive = new BrowserDirectoryDrive()

function selectFiles(parentPath: string, options: ISelectFilesOptions | undefined): Promise<PLSelectResult<PSFileModel>> {
    const files = fileDrive.selectFiles(parentPath, options)

    return files;
}

function getAppConfig(): Promise<IAppConfig> {
    return new Promise<IAppConfig>((resolve, reject) => {
        // window.BridgeAPI.getAppConfig().then((config) => {
        //     resolve(config)
        // }).catch((error) => {
        //     reject(error)
        // })
    })
}


function selectLocation(parentPath: string): Promise<PLSelectResult<PSFileModel>> {
    return new Promise<PLSelectResult<PSFileModel>>((resolve, reject) => {
        const selectResult: PLSelectResult<PSFileModel> = {
            code: CodeOk,
            message: 'ok',
            data: {
                range: [
                    {
                        Uid: '123',
                        Title: '主目录',
                        Name: '主目录',
                        Keywords: '123',
                        Description: '123',
                        IsDir: true,
                        IsHidden: false,
                        IsIgnore: false,
                        Size: 123,
                        Url: '123',
                        Path: "",
                        CreateTime: "",
                        UpdateTime: "",
                        Handle: '123'
                    }
                ],
                page: 0,
                size: 0,
                count: 0
            }
        }
        resolve(selectResult)
    })
}

async function addLocation(): Promise<PSFileModel> {
    const rootDir = await fileDrive.openLocation()

    console.log('rootDir', rootDir)
    return rootDir
}

async function getImageFileData(fileUid: string): Promise<ArrayBuffer> {
    const file = await fileDrive.getImageFileData(fileUid)

    return file
}

if (typeof window !== 'undefined') {
    window.BridgeAPI = {
        storeArticle: storeArticle,
        selectFiles: selectFiles,
        getAppConfig: getAppConfig,
        addLocation,
        selectLocation, getImageFileData
    }
}


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
