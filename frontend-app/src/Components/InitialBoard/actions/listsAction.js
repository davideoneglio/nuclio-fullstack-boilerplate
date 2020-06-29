import { constants } from "./index";

export const addList = (title) => {
    return {
        type: constants.add_list,
        payload: title
    };
};