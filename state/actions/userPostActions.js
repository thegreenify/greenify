import ApiService from "../../api/ApiService";

export const getUserPost = async(dispatch)=>{
    try {
        const res = await ApiService.getAllPost();
    
        dispatch({ type: "GET_USER_POSTS", userPost: res.data });
      } catch (error) {
        dispatch({ type: "FETCH_USER_POSTS_FAILURE", userPost: error.message });
      }
}