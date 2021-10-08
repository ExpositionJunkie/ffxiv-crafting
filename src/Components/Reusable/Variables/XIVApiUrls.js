import {ffxiv} from "../../../APIKeys/xivApiKey";

export const charWithNameAndServer = (charName, server) => {
    return `https://xivapi.com/character/search?name=${charName}&server=${server}&private_key=${ffxiv.private_key}`
}

export const charWithID = (ID) => {
    return `https://xivapi.com/character/${ID}&private_key=${ffxiv.private_key}`
}