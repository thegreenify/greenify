const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        post: action.post,
        loading: false,
        error: null,
      };
    case "GET_ALL_POSTS":
    return{
      ...state,
      post:action.post,
      loading:false,
      error:null
    };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.post,
      };
    case "ADD_POST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_POST_SUCCESS":
      return {
        ...state,
        post: [...state, action.post],
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default postReducer;
