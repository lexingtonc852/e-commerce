import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/reducers';
import { cartReducer } from './cart/reducers';
import { directoryReducer } from './directory/reducers';
import { shopReducer } from './shop/reducers';
import { shopSagas } from './shop/sagas';
import { userSagas } from './user/sagas';
import { cartSagas } from './cart/sags';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // Reducers that want to persist
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

function* rootSaga(){
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(...middlewares),
    // applyMiddleware(thunk),
    // applyMiddleware(routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };