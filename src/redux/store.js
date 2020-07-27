import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/reducers';
import { cartReducer } from './cart/reducers';
import { directoryReducer } from './directory/reducers';
import { shopReducer } from './shop/reducers';

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

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(...middlewares),
    // applyMiddleware(thunk),
    // applyMiddleware(routerMiddleware(history))
);

export const persistor = persistStore(store);

export default { store, persistor };