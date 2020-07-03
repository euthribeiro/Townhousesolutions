import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { baseRegisterName } from '../../config/project';
import { authActions } from '../ducks/Auth';
import api from '../../services/api';

export function* doLogin(action) {

  try {
    const ret = yield call(api.get, '/login', {
      params: {
        ...action.payload,
      },
    });

    if(ret.status === 200) {
      const {data} = ret;

      yield put(authActions.getLoginSuccess(data));
      yield AsyncStorage.setItem(`${baseRegisterName}/login`, JSON.stringify(data));
      action.callback(true);
    }
  } catch(e) {
    action.callback(false);
  }
}

export function* doLogout(_) {
  try {
    yield AsyncStorage.removeItem(`${baseRegisterName}/login`);
    yield put (authActions.doLogoutSuccess());
  } catch(e) {}
}
