import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Creators: authActions, Types } = createActions({
  getLogin: ['data', 'callback'],
  getLoginSuccess: ['data'],
  getRegister: ['data'],
  doLogout: [null],
  doLogoutSuccess: [null],
});

const INITIAL_STATE = Immutable({
  data: null,
  isLogged: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_LOGIN_SUCCESS]: (state = INITIAL_STATE, { data }) =>
    Immutable.merge(state, { data, isLogged: true }),
  [Types.DO_LOGOUT_SUCCESS]: (state = INITIAL_STATE, _) =>
    Immutable.merge(state, { data: INITIAL_STATE, isLogged: false }),
});

export { authActions, Types as authTypes };
