import {serverSigninDomain} from "@/services/server/domain";
import {SPNoteModel} from "@/atom/common/models/personal/note";

export async function serverStoreArticle( article: SPNoteModel) {
    console.log('serverStoreArticle', article)
    const domain = await serverSigninDomain()
    const putUrl = `/personal/libraries/${article.library}/notebooks/${article.notebook}/notes/${article.urn}`
    const putResult = await domain.makePut(putUrl, article)
    console.log('putResult', putResult)
    return 'serverStoreArticle'
}