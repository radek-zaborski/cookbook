
const ADD_FOR_SHOPPING_LIST = 'ADD_FOR_SHOPPING_LIST';
export const addForShoppingList = payload =>({ payload, type: ADD_FOR_SHOPPING_LIST});

export default function reducer(state =[], action) {
  switch (action.type){
    case ADD_FOR_SHOPPING_LIST: {
      return[
        ...state,
        action.payload,
      ];
    }
    default:
      return state;
  }
}