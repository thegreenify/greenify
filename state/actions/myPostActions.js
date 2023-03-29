import ApiService from "../../api/ApiService";


export const getMyPost = async (dispatch)=>{
    try {
        const res = await ApiService.getMyPost();
    
        dispatch({ type: "GET_MY_POSTS", myPost: res.data });
      } catch (error) {
        dispatch({ type: "FETCH_MY_POSTS_FAILURE", myPost: error.message });
      }
}