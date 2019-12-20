import axios from "axios";

//feel free to rename these routes to match the backend. The only part that will mess up the rest of the front end code is renaming what the key is aka "getUser, saveUser"

export default {
    getUser: email => {
        return axios.get(`/api/user/email/${email}`)
    },
    saveUser: data => {
        return axios.post("/api/saveUser", data)
    },
    checkUser: (email, password) => {
        return axios.get(`/api/user/check/${email}/${password}`)
    },
    //route for getting posts, in order of most recent
    getPosts: () => {
        return axios.get(`/api/posts`)
    }
}