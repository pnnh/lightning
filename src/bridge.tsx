import {PSNoteModel} from "@/atom/common/models/personal/note";
import {CodeOk, PLSelectResult} from "@/atom/common/models/protocol";
import {PSFileModel} from "@/atom/common/models/filesystem";
import {IAppConfig} from "@/services/common/config";
import {BrowserDirectoryDrive, ISelectFilesOptions} from "@/services/drive";


function storeArticle(article: PSNoteModel): Promise<void> {
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
