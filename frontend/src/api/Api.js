import axios from "axios";

export default () =>{
    return axios.create({
        baseURL:"http://43.204.11.207/",
        headers:{
            "Content-Type":"aplication/json",
            authorization:`Bearer ${localStorage.getItem("token")}`,
        }
    })
}
