import { call, put, takeLatest, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './actions';
import { shopActionTypes } from './actions';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(err){
        yield put(fetchCollectionsFailure(err.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    )
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}