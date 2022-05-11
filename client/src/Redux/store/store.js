import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  articleReducer,
  teachersReducer,
  articleUpdateReducer,
  findArticleByIdReducer,
  addArticleReducer,
  deleteArticleReducer,
} from "../reducers/article";
import { userReducer } from "../reducers/user";
import { languageReducer } from "../reducers/language";

const finalReducers = combineReducers({
  articleReducer: articleReducer,
  teachersReducer: teachersReducer,
  userReducer: userReducer,
  articleUpdateReducer: articleUpdateReducer,
  findArticleByIdReducer: findArticleByIdReducer,
  addArticleReducer: addArticleReducer,
  deleteArticleReducer: deleteArticleReducer,
  languageReducer: languageReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];
const initialReducer = {
  userReducer: {
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
