import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import storage from 'redux-persist/lib/storage';
import reducers from '@redux/reducers';
import rootSaga from '@redux/saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer = [applyMiddleware(...middleware)];

const persistConfig = {
    storage,
    key: 'nextjs',
    blacklist: ['requests'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, compose(...enhancer));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store, {}, () => {
    persistor.persist();
});

export default store;
