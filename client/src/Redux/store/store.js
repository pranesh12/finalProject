import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { languageReducer } from "../reducers/language";
import {
  tourGuidesReducer,
  tourGuideByIdReducer,
  addTourGuideReducer,
  deleteTourGuideReducer,
  tourUpdateReducer,
} from "../reducers/tourguide";

import {
  loginUserReducer,
  registerUserReducer,
  removeUserReducer,
  getAllUserReducer,
} from "../reducers/user";

import {
  articleReducer,
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

const finalReducers = combineReducers({
  articleReducer: articleReducer,

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
  tourGuidesReducer: tourGuidesReducer,
  tourUpdateReducer: tourUpdateReducer,
  deleteTourGuideReducer: deleteTourGuideReducer,
  addTourGuideReducer: addTourGuideReducer,
  tourGuideByIdReducer: tourGuideByIdReducer,
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
