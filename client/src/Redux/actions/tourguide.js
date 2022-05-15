import axios from "axios";
import {
  GET_ALL_TOUR_GUIDES,
  GET_ALL_TOUR_GUIDES_SUCCESS,
  GET_ALL_TOUR_GUIDES_FAILED,
  GET_TOUR_GUIDE,
  GET_TOUR_GUIDE_SUCCESS,
  GET_TOUR_GUIDE_FAILED,
  UPDATE_TOUR_GUIDE,
  UPDATE_TOUR_GUIDE_SUCCESS,
  UPDATE_TOUR_GUIDE_FAILED,
  ADD_TOUR_GUIDE,
  ADD_TOUR_GUIDE_SUCCESS,
  ADD_TOUR_GUIDE_FAILED,
  REMOVE_TOUR_GUIDE,
  REMOVE_TOUR_GUIDE_SUCCESS,
  REMOVE_TOUR_GUIDE_FAILED,
} from "../../actionType/actionType";
import { url } from "../../api/api";

export const getTourguidesData = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TOUR_GUIDES });
  try {
    const res = await axios.get(url + `guides`);
    dispatch({ type: GET_ALL_TOUR_GUIDES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_TOUR_GUIDES_FAILED, payload: error });
  }
};

//getturguideByid
export const getTourGuideById = (id) => async (dispatch) => {
  dispatch({ type: GET_TOUR_GUIDE });
  try {
    const res = await axios.get(url + `guide?id=${id}`);
    dispatch({ type: GET_TOUR_GUIDE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TOUR_GUIDE_FAILED, payload: error });
  }
};

export const addTourGuide = (data) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: ADD_TOUR_GUIDE });
  try {
    const res = await axios.post(url + `guide?email=${email}`, data);
    dispatch({ type: ADD_TOUR_GUIDE_SUCCESS, payload: res.data });
    window.location = `/admin`;
  } catch (error) {
    dispatch({ type: ADD_TOUR_GUIDE_FAILED, payload: error });
  }
};

export const removeTourGuideData = (id) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: REMOVE_TOUR_GUIDE });
  try {
    const res = await axios.delete(url + `guide?id=${id}&email=${email}`);
    dispatch({ type: REMOVE_TOUR_GUIDE_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: REMOVE_TOUR_GUIDE_FAILED, payload: error });
  }
};

export const updateTourGuide = (id, newData) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: UPDATE_TOUR_GUIDE });
  const updataedData = {
    id,
    newData,
  };
  try {
    const res = await axios.put(url + `guide?email=${email}`, updataedData);
    dispatch({ type: UPDATE_TOUR_GUIDE_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: UPDATE_TOUR_GUIDE_FAILED, payload: error });
  }
};
