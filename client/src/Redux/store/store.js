import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  loginUserReducer,
  registerUserReducer,
  removeUserReducer,
  getAllUserReducer,
} from "../reducers/user";

import {
  articleReducer,
  teachersReducer,
  articleUpdateReducer,
  addArticleReducer,
  deleteArticleReducer,
  articleCardReducer,
  articleByIdReducer,
} from "../reducers/article";

import {
  getAllreviewReducer,
  addReviewReducer,
  removeReviewReducer,
  updateReviewReducer,
  findReviewByMailReducer,
} from "../reducers/review";

import { languageReducer } from "../reducers/language";

const finalReducers = combineReducers({
  articleReducer: articleReducer,
  teachersReducer: teachersReducer,
  articleUpdateReducer: articleUpdateReducer,
  addArticleReducer: addArticleReducer,
  deleteArticleReducer: deleteArticleReducer,
  languageReducer: languageReducer,
  articleCardReducer: articleCardReducer,
  articleByIdReducer: articleByIdReducer,
  getAllreviewReducer: getAllreviewReducer,
  addReviewReducer: addReviewReducer,
  removeReviewReducer: removeReviewReducer,
  updateReviewReducer: updateReviewReducer,
  findReviewByMailReducer: findReviewByMailReducer,
  loginUserReducer: loginUserReducer,
  registerUserReducer: registerUserReducer,
  removeUserReducer: removeUserReducer,
  getAllUserReducer: getAllUserReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];
const initialReducer = {
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
