import { userActionTypes } from './actions'

const initialState = {
    currentUser: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.user
            }
        default:
            return state;
    }
}