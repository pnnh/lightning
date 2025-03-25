import {IAppConfig} from "@/services/common/config";
import {PSFileModel} from "@/atom/common/models/filesystem";
import {PSArticleModel} from "@/atom/common/models/article";

export {} // 该行不能去掉，否则会提示类型不存在

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "lightning-highlight": any;
        }
    }

    interface Window {
        turnstile: any;
        turnstileSuccessCallback: any;
        BridgeAPI: {
            getAppConfig: () => Promise<IAppConfig>
            storeArticle: (article: PSArticleModel) => Promise<void>
            addLocation: () => Promise<PSFileModel>
            selectLocation: (parentPath: string) => Promise<PLSelectResult<PSFileModel>>
            getImageFileData: (fileUid: string) => Promise<ArrayBuffer>
            selectFiles: (parentPath: string, options: ISelectFilesOptions | undefined) => Promise<PLSelectResult<PSFileModel>>
        }
    }
}
