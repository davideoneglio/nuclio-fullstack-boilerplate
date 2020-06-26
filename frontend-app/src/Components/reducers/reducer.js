import { constants } from "../actions";
let listId = 2;
let cardId = 5;

const initialState = [
    {
        title: "List 1",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "El primero card de nuestra lista 1"
            },
            {
                id: `card-${1}`,
                text: "El segundo card de nuestra lista 1"
            }
        ]
    },
    {
        title: "List 2",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "El primero card de nuestra lista 2"
            },
            {
                id: `card-${3}`,
                text: "El segundo card de nuestra lista 2"
            },
            {
                id: `card-${4}`,
                text: "El tercero card de nuestra lista 2"
            }
        ]
    }
]

const reducer = (state = initialState, action) => {
    switch ((action.type)) {

        case constants.add_list:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listId}`
            }
            listId += 1
            return [...state, newList];

        case constants.add_card:
            const newCard = {
                text:action.payload.text,
                id: `card-${cardId}`
            };
            cardId += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });

            return newState;

        default:
            return state;

    }
};

export default reducer;