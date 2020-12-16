
const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = payload =>({ payload, type: ADD_PRODUCT});

export default function reducer(state =[], action) {
  switch (action.type){
    case ADD_PRODUCT: {
      return[
        ...state,
        action.payload,
      ];
    }
    default:
      return state;
  }
}