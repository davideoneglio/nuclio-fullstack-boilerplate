import { constants } from "../actions";

export const addList = (title) => {
    return {
        type: constants.add_list,
        payload: title
    };
};