export const FETCH_TASKS_REQUESTED = "tasks/FETCH_TASKS_REQUESTED";
export const FETCH_TASKS_SUCCEDED = "tasks/FETCH_TASKS_SUCCEDED";
export const FETCH_TASKS_FAILED = "tasks/FETCH_TASKS_FAILED";

const INITIAL_STATE = {
  tasks: [],
  isLoading: false,
  isLoaded: false,
  isError: false
};

export const fetchRequested = () => ({ type: FETCH_TASKS_REQUESTED });
export const fetchFailed = () => ({ type: FETCH_TASKS_FAILED });
export const fetchSucceded = (data) => ({ type: FETCH_TASKS_SUCCEDED, payload: data });

const redux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false
      };
    case FETCH_TASKS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoaded: true,
        tasks: action.payload
      };
    case FETCH_TASKS_FAILED:
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
