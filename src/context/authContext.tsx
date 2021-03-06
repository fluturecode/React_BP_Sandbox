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

/* 

import createDataContext from "../context/indexContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { post } from "../services/http.service";
import moment from "moment";

const AUTHENTICATE = "AUTHENTICATE";
const LOGOUT = "LOGOUT";
const SET_LOADING = "SET_LOADING";
const SET_USER = "SET_USER";
const SET_SETUP_COMPLETE = "SET_SETUP_COMPLETE";
const SET_USER_TYPE = "SET_USER_TYPE";
const APPOINTMENT = "APPOINTMENT";
const IS_USER_GUEST = "IS_USER_GUEST";
const PUSH_NOTIFICATION_SUBSCRIPTION = "PUSH_NOTIFICATION_SUBSCRIPTION";
const LOGIN_USER = "LOGIN_USER";
const SET_APPOINTMENT_ADDRESS = "SET_APPOINTMENT_ADDRESS";
const SET_APPOINTMENT_REFRESH_DATA = "SET_APPOINTMENT_REFRESH_DATA";
const SET_TUTORIAL_COMPLETE = "SET_TUTORIAL_COMPLETE";

const initialState = {
  user: {},
  token: null,
  loading: false,
  userType: null,
  appointment: null,
  isUserGuest: false,
  tutorialComplete: false,
  push_notification_subscription: null,
  appointmentAddress: "",
  appointmentRefreshData: {
    lastUpdated: moment(),
    refreshFunction: null,
  },
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, token: action.token };
    case LOGIN_USER:
      return { ...state, user: action.user, token: action.token };
    case LOGOUT:
      return { ...initialState };
    case SET_LOADING:
      return { ...state, loading: action.boolean };
    case SET_USER:
      return { ...state, user: action.user };
    case SET_SETUP_COMPLETE:
      user = { ...state.user, setupComplete: action.setupComplete };
      return { ...state, user };
    case SET_USER_TYPE:
      return { ...state, userType: action.userType };
    case APPOINTMENT:
      return { ...state, appointment: action.appointment };
    case IS_USER_GUEST:
      return { ...state, isUserGuest: action.isUserGuest };
    case PUSH_NOTIFICATION_SUBSCRIPTION:
      return {
        ...state,
        push_notification_subscription: action.push_notification_subscription,
      };
    case SET_APPOINTMENT_ADDRESS:
      return { ...state, appointmentAddress: action.address };
    case SET_APPOINTMENT_REFRESH_DATA:
      const updatedData = {
        ...state.appointmentRefreshData,
        ...action.appointmentRefreshData,
      };
      return {
        ...state,
        appointmentRefreshData: updatedData,
      };
    case SET_TUTORIAL_COMPLETE:
      return {
        ...state,
        tutorialComplete: action.tutorialComplete,
      };
    default:
      return state;
  }
};

const setUser = dispatch => async user => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
  return dispatch({
    type: SET_USER,
    user,
  });
};

const setSetupComplete = dispatch => async setupComplete => {
  return dispatch({
    type: SET_SETUP_COMPLETE,
    setupComplete,
  });
};

// TODO: when user logs out call remove on push_notification_subscription in Context so we can unsubscribe when the user gets logged out
const userLogout = dispatch => async () => {
  await AsyncStorage.removeItem("user");
  await AsyncStorage.removeItem("token");
  return dispatch({ type: LOGOUT });
};

const setLoading = dispatch => async boolean => {
  dispatch({ type: SET_LOADING, boolean });
};

const setToken = dispatch => async token => {
  await AsyncStorage.setItem("token", JSON.stringify(token));
  return dispatch({ type: AUTHENTICATE, token });
};

const setUserType = dispatch => userType =>
  dispatch({
    type: SET_USER_TYPE,
    userType,
  });

const setAppointment = dispatch => async appointment => {
  return dispatch({ type: APPOINTMENT, appointment });
};

const setIsUserGuest = dispatch => async isUserGuest => {
  return dispatch({ type: IS_USER_GUEST, isUserGuest });
};

const setNotificationListener = dispatch => () => {
  dispatch({
    type: PUSH_NOTIFICATION_SUBSCRIPTION,
  });
};

const loginUser = dispatch => async (loginStrategy, payload) => {
  const loginSuccess = await post(loginStrategy, payload);
  if (loginSuccess) {
    if (loginSuccess.message && loginSuccess.message.length) {
      await AsyncStorage.setItem("failedAuthMessage", loginSuccess.message);
      return;
    }
    const { user, token } = loginSuccess;
    await AsyncStorage.setItem("user", JSON.stringify(user));
    await AsyncStorage.setItem("token", JSON.stringify(token));
    return dispatch({ type: LOGIN_USER, loginSuccess });
  }
};

const setAppointmentAddress = dispatch => address =>
  dispatch({
    type: SET_APPOINTMENT_ADDRESS,
    address,
  });

const setAppointmentRefreshData = dispatch => appointmentRefreshData =>
  dispatch({
    type: SET_APPOINTMENT_REFRESH_DATA,
    appointmentRefreshData,
  });
const setTutorialComplete = dispatch => async tutorialComplete => {
  await AsyncStorage.setItem(
    "tutorialComplete",
    JSON.stringify(tutorialComplete)
  );
  return dispatch({
    type: SET_TUTORIAL_COMPLETE,
    tutorialComplete,
  });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    setUser,
    userLogout,
    setLoading,
    setToken,
    setUserType,
    setAppointment,
    setIsUserGuest,
    setNotificationListener,
    loginUser,
    setAppointmentAddress,
    setAppointmentRefreshData,
    setTutorialComplete,
    setSetupComplete,
  },
  initialState
);
*/
