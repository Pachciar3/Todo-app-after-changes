export const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
export const FETCH_USERS_SUCCEDED = "users/FETCH_USERS_SUCCEDED";
export const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";

// export const CREATE_TASK_REQUESTED = "users/CREATE_TASK_REQUESTED";
// export const CREATE_TASK_SUCCEDED = "users/CREATE_TASK_SUCCEDED";
// export const CREATE_TASK_FAILED = "users/CREATE_TASK_FAILED";

// export const EDIT_TASK_REQUESTED = "users/EDIT_TASK_REQUESTED";
// export const EDIT_TASK_SUCCEDED = "users/EDIT_TASK_SUCCEDED";
// export const EDIT_TASK_FAILED = "users/EDIT_TASK_FAILED";

// export const DELETE_TASK_REQUESTED = "users/DELETE_TASK_REQUESTED";
// export const DELETE_TASK_SUCCEDED = "users/DELETE_TASK_SUCCEDED";
// export const DELETE_TASK_FAILED = "users/DELETE_TASK_FAILED";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isLoaded: false,
  isError: false
};

export const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
export const fetchFailed = () => ({ type: FETCH_USERS_FAILED });
export const fetchSucceded = (data) => ({ type: FETCH_USERS_SUCCEDED, payload: data });

const redux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false
      };
    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoaded: true,
        users: action.payload
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default redux;
