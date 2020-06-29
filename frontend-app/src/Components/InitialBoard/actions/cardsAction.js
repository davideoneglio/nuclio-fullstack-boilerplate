import { constants } from "./index";

export const addCard = (listId, text) => {
    return {
        type: constants.add_card,
        payload: {text, listId}
    };
};