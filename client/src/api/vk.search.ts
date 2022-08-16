import { instance } from "./index"


export const vkSearch = (keywords: Array<string> | string, groups: Array<string> | string) =>{
    return instance.post('/vk/search', {
        keywords,
        groups
    })
}
