import { shopActionTypes } from './actions';

const initialState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

export const shopReducer = (state=initialState, action) => {
    switch(action.type){
        case shopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching: true
            }
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collections: action.collectionsMap
            }
        case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }
}