const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const myPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MY_POSTS":
      return {
        ...state,
        myPost: action.myPost,
        loading: false,
        error: null,
      };
    case "FETCH_MY_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.post,
      };
    default:
      return state;
  }
};


export default myPostReducer