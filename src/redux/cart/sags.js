import { all, call, takeLatest, put } from 'redux-saga/effects';
import { clearCart } from './actions';
import { userActionTypes } from '../user/actions';

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}