import ApiService from "../../api/ApiService";
import Api from "../../api/Api";

const post = post;
export const fetchPosts = async (dispatch, post) => {
  try {
    dispatch({ type: "FETCH_POSTS_SUCCESS", post: post });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", post: error.message });
  }
};

export const getPost = async (dispatch) => {
  try {
    const res = await ApiService.getAllPost();
    dispatch({ type: "GET_ALL_POSTS", post: res.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", post: error.message });
  }
};
// export const fetchPosts = () => {
//   return async (dispatch) => {
//       dispatch({ type: 'FETCH_POSTS_REQUEST' });
//       try {
//           const response = await axios.get('http://your-server-url/posts');
//           dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
//       } catch (error) {
//           dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
//       }
//   }
// };

// export const addPost = (post) => {
//   return async (dispatch) => {
//       dispatch({ type: 'ADD_POST_REQUEST' });
//       try {
//           const response = await ApiService.addPost();
//           dispatch({ type: 'ADD_POST_SUCCESS', payload: response.data });
//       } catch (error) {
//           dispatch({ type: 'ADD_POST_FAILURE', payload: error.message });
//       }
//   }
// };
