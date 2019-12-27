import axios from "axios";

export default {
    getUser: email => {
        return axios.get(`/api/user/email/${email}`)
    },
    register: data => {
        return axios.post("/api/register", data)
    },
    authenticate: data => {
        return axios.post(`/api/authenticate`, data)
    },
    comment: (email, data) => {
        return axios.post(`/api/comment/${email}`, data)
    },
    post: (email, data) => {
        return axios.post(`/api/post/${email}`, data)
    },
    //route for getting posts, in order of most recent
    getPosts: () => {
        return axios.get(`/api/all`)
    }
};