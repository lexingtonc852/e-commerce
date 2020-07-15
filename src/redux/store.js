import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
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

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(logger),
    // applyMiddleware(thunk),
    // applyMiddleware(routerMiddleware(history))
);

export const persistor = persistStore(store);

export default { store, persistor };