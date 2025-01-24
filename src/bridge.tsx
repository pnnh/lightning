import {PSNoteModel} from "@/atom/common/models/personal/note";
import {CodeOk, PLSelectResult} from "@/atom/common/models/protocol";
import {PSFileModel} from "@/atom/common/models/filesystem";
import {IAppConfig} from "@/services/common/config";


function storeArticle(article: PSNoteModel): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        // window.BridgeAPI.storeArticle(article).then(() => {
        //     resolve()
        // }).catch((error) => {
        //     reject(error)
        // })
    })
}

interface ISelectFilesOptions {
    directory?: boolean
}

function selectFiles(parentPath: string, options: ISelectFilesOptions | undefined): Promise<PLSelectResult<PSFileModel>> {
    return new Promise<PLSelectResult<PSFileModel>>((resolve, reject) => {
        const selectResult: PLSelectResult<PSFileModel> = {
            code: CodeOk,
            message: 'ok',
            data: {
                range: [
                    {
                        URN: '123',
                        Uid: '123',
                        Title: '123',
                        Name: '123',
                        Keywords: '123',
                        Description: '123',
                        IsDir: true,
                        IsHidden: false,
                        IsIgnore: false,
                        Size: 123,
                        Url: '123',
                        Path: "",
                        CreateTime: "",
                        UpdateTime: ""
                    },
                    {
                        URN: 'abc',
                        Uid: 'abc',
                        Title: 'abc',
                        Name: 'abc',
                        Keywords: 'abc',
                        Description: 'abc',
                        IsDir: true,
                        IsHidden: false,
                        IsIgnore: false,
                        Size: 123,
                        Url: '123',
                        Path: "",
                        CreateTime: "",
                        UpdateTime: ""
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

function getAppConfig(): Promise<IAppConfig> {
    return new Promise<IAppConfig>((resolve, reject) => {
        // window.BridgeAPI.getAppConfig().then((config) => {
        //     resolve(config)
        // }).catch((error) => {
        //     reject(error)
        // })
    })
}

window.BridgeAPI = {
    storeArticle: storeArticle,
    selectFiles: selectFiles,
    getAppConfig: getAppConfig
}
