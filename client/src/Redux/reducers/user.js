import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_DATA_FAILED,
  DELETE_USER_ACCOUNT,
  DELETE_USER_ACCOUNT_SUCCESS,
  DELETE_ARTICLE_DATA_FAILED,
} from "../../actionType/actionType";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        currentUser: action.payload,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        loginLoading: false,
        error: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        registerLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        registerLoading: false,
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        registerLoading: false,
      };
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        loading: false,
      };
    case GET_USER_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_USER_ACCOUNT:
      return {
        ...state,
        dleteAccountLoading: true,
      };
    case DELETE_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        dleteAccountLoading: false,
        deletedDAta: action.payload,
      };
    case DELETE_ARTICLE_DATA_FAILED:
      return {
        ...state,
        dleteAccountLoading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
