import { userActionTypes } from './actions'

const initialState = {
    currentUser: null,
    error: null,
    displayName: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userActionTypes.SIGN_IN_SUCCESS:
        case userActionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                currentUser: action.user,
                error: null
            }
        case userActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}