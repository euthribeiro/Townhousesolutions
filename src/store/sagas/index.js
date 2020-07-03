import { all, takeLatest, takeEvery } from 'redux-saga/effects';

// ducks
import { authTypes } from '../ducks/Auth';

// sagas

import { doLogin, doLogout } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(authTypes.GET_LOGIN, doLogin),
    takeLatest(authTypes.DO_LOGOUT, doLogout),
  ]);
}
