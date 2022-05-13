import axios from "axios";
import {
  FETCH_ARTICLE_DATA,
  FETCH_ARTICLE_DATA_SUCCESS,
  FETCH_ARTICLE_DATA_FAILED,
  FETCH_ALL_TEACHERS,
  FETCH_ALL_TEACHERS_SUCCESS,
  FETCH_ALL_TEACHERS_FAILED,
  Add_ARTICLE_DATA,
  Add_ARTICLE_DATA_SUCCESS,
  Add_ARTICLE_DATA_FAILED,
  DELETE_ARTICLE_DATA,
  DELETE_ARTICLE_DATA_FAILED,
  DELETE_ARTICLE_DATA_SUCCESS,
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

import { url } from "../../api/api";

export const getArticleData = () => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLE_DATA });
  try {
    const res = await axios.get(url + `articles`);
    dispatch({ type: FETCH_ARTICLE_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ARTICLE_DATA_FAILED, payload: error });
  }
};
//GET article card item
export const getArticleCard = () => async (dispatch) => {
  dispatch({ type: GET_ARTICLECARD });
  try {
    const res = await axios.get(url + `articleCard`);
    dispatch({ type: GET_ARTICLECARD_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ARTICLECARD_FAILED, payload: error });
  }
};

//getArticleByID
export const getArticleByID = (id) => async (dispatch) => {
  dispatch({ type: GET_ARTICLEBY_ID });
  try {
    const res = await axios.get(url + `article?id=${id}`);
    dispatch({ type: GET_ARTICLEBY_ID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ARTICLEBY_ID_FAILED, payload: error });
  }
};
export const getTeachers = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_TEACHERS });
  try {
    const res = await axios.get(url + `teachers`);
    dispatch({ type: FETCH_ALL_TEACHERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_TEACHERS_FAILED });
  }
};

export const addArticleData = (data) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: Add_ARTICLE_DATA });
  try {
    const res = await axios.post(url + `article?email=${email}`, data);
    dispatch({ type: Add_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = `/admin`;
  } catch (error) {
    dispatch({ type: Add_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const deletArticleData = (id) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: DELETE_ARTICLE_DATA });
  try {
    const res = await axios.delete(url + `article?id=${id}&email=${email}`);
    dispatch({ type: DELETE_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: DELETE_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const updateArticle = (id, newData) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: UPDATE_ARTICLE_DATA });
  const updataedData = {
    id,
    newData,
  };

  try {
    const res = await axios.put(url + `article?email=${email}`, updataedData);
    dispatch({ type: UPDATE_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: UPDATE_ARTICLE_DATA_FAILED, payload: error });
  }
};
