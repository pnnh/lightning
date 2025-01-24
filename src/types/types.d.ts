import {IAppConfig} from "@/services/common/config";
import {PSFileModel} from "@/atom/common/models/filesystem";

export {} // 该行不能去掉，否则会提示类型不存在

declare global {
    interface Window {
        BridgeAPI: {
            getAppConfig: () => Promise<IAppConfig>
            storeArticle: (article: PSNoteModel) => Promise<void>
            addLocation: () => Promise<PSFileModel>
            selectLocation: (parentPath: string) => Promise<PLSelectResult<PSFileModel>>
            selectFiles: (parentPath: string, options: ISelectFilesOptions | undefined) => Promise<PLSelectResult<PSFileModel>>
        }
    }
}
