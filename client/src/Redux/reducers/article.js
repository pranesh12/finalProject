import {
  FETCH_ARTICLE_DATA_FAILED,
  FETCH_ARTICLE_DATA_SUCCESS,
  FETCH_ARTICLE_DATA,
  Add_ARTICLE_DATA,
  Add_ARTICLE_DATA_FAILED,
  Add_ARTICLE_DATA_SUCCESS,
  DELETE_ARTICLE_DATA,
  DELETE_ARTICLE_DATA_SUCCESS,
  DELETE_ARTICLE_DATA_FAILED,
  UPDATE_ARTICLE_DATA,
  UPDATE_ARTICLE_DATA_SUCCESS,
  UPDATE_ARTICLE_DATA_FAILED,
  GET_ARTICLECARD,
  GET_ARTICLECARD_SUCCESS,
  GET_ARTICLECARD_FAILED,
  GET_ARTICLEBY_ID,
  GET_ARTICLEBY_ID_SUCCESS,
  GET_ARTICLEBY_ID_FAILED,
} from "../../actionType/actionType";

export const articleReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case FETCH_ARTICLE_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

//articleIdReducer

export const articleByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ARTICLEBY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_ARTICLEBY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ARTICLEBY_ID_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const articleCardReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ARTICLECARD:
      return {
        ...state,
        loading: true,
      };
    case GET_ARTICLECARD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ARTICLECARD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case Add_ARTICLE_DATA:
      return {
        ...state,
        loading: true,
      };
    case Add_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Add_ARTICLE_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export const deleteArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_DATA:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_ARTICLE_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export const articleUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_DATA:
      return {
        ...state,
      };
    case UPDATE_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_ARTICLE_DATA_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
