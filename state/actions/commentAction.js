import ApiService from "../../api/ApiService";

export const fetchComments = async (dispatch, postId) => {
  try {
    const res = await ApiService.getComments(postId);
    dispatch({ type: "FETCH_COMMENTS_SUCCESS", comments: res.data });
  } catch (error) {
    dispatch({ type: "FETCH_COMMENTS_FAILURE", comments: error.message });
  }
};
