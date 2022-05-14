import { CHANGE_TO_CHAKMALANGUAGE } from "../../actionType/actionType";

export const changeLanguage = (bool) => async (dispatch) => {
  dispatch({ type: CHANGE_TO_CHAKMALANGUAGE, payload: bool });
};
