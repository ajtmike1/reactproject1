import { combineReducers } from 'redux';

export const initialState = {
    userInput: '',
    items: [],
    item: {}
}
const itemReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD":
            return {
                ...state,
                items: [...state.items, action.itemAdded]
            }
        case "FETCH":
            return {
                ...state,
                items: action.payload.items
            }
        default:
            return state;
    }
}


export default combineReducers({
    itemActionHandler: itemReducer
})
