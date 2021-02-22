export const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

/**import { AsyncStorage } from 'react-native';
import createDataContext from './indexContext';
import apiConfig from '../api/apiConfig';
const AUTHENTICATE = 'AUTHENTICATE';
const LOGOUT = 'LOGOUT';
const SET_ALERT = 'SET_ALERT';
const CLEAR_ALERTS = 'CLEAR_ALERTS';
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';
const initialState = {
  user: {},
  alert: {},
  error: {},
  loading: false,
};
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, user: action.user, loading: false };
    case LOGOUT:
      return { ...state, user: {} };
    case SET_ALERT:
      return { ...state, alert: action.payload };
    case CLEAR_ALERTS:
      return { ...state, alert: {} };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.boolean };
    default:
      return state;
  }
};
const userLogin = dispatch => {
  return async creds => {
    try {
      const response = await apiConfig.post('/auth/login', creds);
      const user = response.data.user;
      const token = response.headers['x-auth-token'];
      user.token = token;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: AUTHENTICATE, user });
    } catch (err) {
      console.log('error', err.message);
      dispatch({ type: SET_LOADING, boolean: false });
    }
  };
};
const userLogout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  };
};
const loadUser = dispatch => {
  return async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        dispatch({ type: AUTHENTICATE, user: JSON.parse(user) });
      }
    } catch (error) {
      console.log('error loading user from AsyncStorage', error.message);
    }
  };
};
const forgotPassword = dispatch => async email => {
  try {
    const response = await apiConfig.post('users/reset-password', email);
    let payload = {
      title: 'Success!',
      message: response.data,
    };
    dispatch({ type: SET_ALERT, payload });
  } catch (err) {
    let payload = {
      title: 'error',
      message:
        'There was an error! If the problem continues please contact the organizer',
    };
    dispatch({ type: SET_ALERT, payload });
  }
};
const clearAlerts = dispatch => async () => {
  dispatch({ type: CLEAR_ALERTS });
};
const updateProfile = dispatch => {
  return async creds => {
    // console.log(creds)
    try {
      const { data } = await apiConfig.put('/users', { user: creds });
      await AsyncStorage.setItem('user', JSON.stringify(data));
      dispatch({ type: AUTHENTICATE, user: data });
      return data;
    } catch (err) {
      console.log('error', err.message);
    }
  };
};
const setError = dispatch => async error => {
  dispatch({ type: SET_ERROR, payload: error });
};
const authToken = dispatch => async () => {
  try {
    let user = await AsyncStorage.getItem('user');
    let { token } = JSON.parse(user);
    return token;
  } catch (err) {
    console.log(err.message);
  }
};
const setLoading = dispatch => async boolean => {
  dispatch({ type: SET_LOADING, boolean });
};
export const { Context, Provider } = createDataContext(
  authReducer,
  {
    userLogin,
    userLogout,
    loadUser,
    forgotPassword,
    clearAlerts,
    updateProfile,
    setError,
    authToken,
    setLoading,
  },
  initialState
); */
