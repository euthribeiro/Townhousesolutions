import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';
import Tron from '../config/rectotronConfig';

import reducers from './ducks';
import sagas from './sagas';

const middleware = [];
const sagaMonitor = __DEV__ ? Tron.createSagaMonitor() : null;
const reduxEnhancer = __DEV__ ? Tron.createEnhancer() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(offlineMiddleware());
middleware.push(suspendSaga(sagaMiddleware));
middleware.push(consumeActionMiddleware());

let Composer = null;

if (__DEV__) {
  Composer = compose(
    applyMiddleware(...middleware),
    reduxEnhancer,
  );
} else {
  Composer = compose(applyMiddleware(...middleware));
}

const store = createStore(reducers, Composer);
sagaMiddleware.run(sagas);

export default store;
