const initialState = {
  COMMENTS: [],
  loading: false,
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        comments: action.comments,
        loading: false,
        error: null,
      };
    case "GET_ALL_COMMENTS":
      return {
        ...state,
        comments: action.comments,
        loading: false,
        error: null,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.comments,
      };
    case "ADD_COMMENTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_COMMENTS_SUCCESS":
      return {
        ...state,
        comments: [...state.comments, action.comments],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default commentReducer;
