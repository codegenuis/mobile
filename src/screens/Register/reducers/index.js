import {NEW_USER, NEW_USER_BEGIN} from '../constants';


// declare all states
const initialState = {
    item: {},
    loading: false
}

export default function registerReducer (state = initialState, action){
    switch (action.type){
        case NEW_USER:
        return {
            ...state,
            item: action.payload.user,
            loading: false
        }
        case NEW_USER_BEGIN:
        return {
            ...state,
            loading: true
        }

        default:
        return state;
    }
}