import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export function fetchCollectionsStart(){
    return{
        type: shopActionTypes.FETCH_COLLECTIONS_START
    }
}

export function fetchCollectionsSuccess(collectionsMap){
    return{
        type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        collectionsMap
    }
}

export function fetchCollectionsFailure(errorMessage){
    return{
        type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
        errorMessage
    }
}

export function fetchCollectionsStartAsync(){
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => 
            dispatch(fetchCollectionsFailure(error))
        );
    }
}


export const shopActionTypes = {
    FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
    FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
    FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE',
}