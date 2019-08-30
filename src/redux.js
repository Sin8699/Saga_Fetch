// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  data: null,
  error: null
};

export function reducer(state = initialState, action) {
  console.log("REDUCER");
  switch (action.type) {
    case API_CALL_REQUEST:
        console.log("REQUEST");
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
        console.log("SUCCESS");
      return { ...state, fetching: false, data: action.response };
    case API_CALL_FAILURE:
      console.log("FAIL");
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
}