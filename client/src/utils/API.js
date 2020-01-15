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
    comment: (email, id, data) => {
        return axios.post(`/api/comment/${email}/${id}`, data)
    },
    post: (email, data) => {
        return axios.post(`/api/post/${email}`, data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    //route for getting posts, in order of most recent
    getPosts: () => {
        return axios.get(`/api/all`)
    },
    getPostsCategory: category => {
        return axios.get(`/api/posts/category/${category}`)
    },
    getPostsType: type => {
        return axios.get(`/api/posts/type/${type}`)
    },
    getUserActivity: email => {
        return axios.get(`/api/activity/email/${email}`)
    },
    likePost: (id, data) => {
        return axios.put(`/api/posts/like/${id}`, data)
    },
    likeComment: (id, data) => {
        return axios.put(`/api/comment/like/${id}`, data)
    },
    deletePost: id => {
        return axios.delete(`/api/posts/delete/${id}`)
    },
    deleteComment: id => {
        return axios.delete(`/api/comment/delete/${id}`)
    }
};