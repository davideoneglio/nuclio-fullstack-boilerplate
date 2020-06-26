import { constants } from "../actions";

export const addCard = (listId, text) => {
    return {
        type: constants.add_card,
        payload: {text, listId}
    };
};