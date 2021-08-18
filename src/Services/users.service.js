import axios from "axios"

let config = {
    baseURL:"https://jsonplaceholder.typicode.com",
}
let axiosInstance = axios.create(config);
const getUsers = () => {
    return axiosInstance('/users')
}

const getPosts = () => {
  return axiosInstance('/posts')
}

const getComments = () => {
    return axiosInstance('/comments')
}

export {getUsers, getPosts, getComments}


