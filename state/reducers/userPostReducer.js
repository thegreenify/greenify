const initialState = {
  posts: [],
  loading: false,
  error: null,
};


const userPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_POSTS":
          return {
            ...state,
            userPost: action.userPost,
            loading: false,
            error: null,
          };
        case "FETCH_USER_POSTS_FAILURE":
          return {
            ...state,
            loading: false,
            error: action.post,
          };
        default:
          return state;
      }
}