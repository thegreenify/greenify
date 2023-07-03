import axios from "axios";

export default () =>{
    return axios.create({
        baseURL:"http://localhost:8000/",
        headers:{
            "Content-Type":"aplication/json",
            authorization:`Bearer ${localStorage.getItem("token")}`,
        }
    })
}
