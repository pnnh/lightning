import {IDomain, trySigninDomain} from "@/services/common/domain";
import {getAppConfig} from "@/tools/files/files";

export async function clientSigninDomain(): Promise<IDomain> {
    const appConfig = await getAppConfig()
    const domain = await trySigninDomain(appConfig.WORKER_URL)
    if (!domain) {
        throw new Error('domain not found')
    }
    return domain
}
