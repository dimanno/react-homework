import axios from "axios";

let config = {
    baseURL:"https://jsonplaceholder.typicode.com",
}
let axiosInstance = axios.create(config);
const getUsers = () => {
    return  axiosInstance.get('/users');
}

const getPostsOfUser = (userId) => {
  return   axiosInstance.get(`/users/${userId}/posts`)
}

const getCommentsOfPost = (postId) => {
    return   axiosInstance.get(`/posts/${postId}/comments`)
}
export {getUsers, getPostsOfUser, getCommentsOfPost}