import { shopActionTypes } from './actions';

const initialState = {
    collections: null
}

export const shopReducer = (state=initialState, action) => {
    switch(action.type){
        case shopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.collectionsMap
            }
        default:
            return state;
    }
}