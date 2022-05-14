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

export const tourGuidesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_TOUR_GUIDES:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TOUR_GUIDES_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case GET_ALL_TOUR_GUIDES_FAILED:
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

//

export const tourGuideByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TOUR_GUIDE:
      return {
        ...state,
        loading: true,
      };
    case GET_TOUR_GUIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_TOUR_GUIDE_FAILED:
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

export const addTourGuideReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TOUR_GUIDE:
      return {
        ...state,
        loading: true,
      };
    case ADD_TOUR_GUIDE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_TOUR_GUIDE_FAILED:
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

export const deleteTourGuideReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_TOUR_GUIDE:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_TOUR_GUIDE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_TOUR_GUIDE_FAILED:
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

export const tourUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TOUR_GUIDE:
      return {
        ...state,
      };
    case UPDATE_TOUR_GUIDE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_TOUR_GUIDE_FAILED: {
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
