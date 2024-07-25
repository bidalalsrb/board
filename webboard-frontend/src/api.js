import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})
export const getAllPosts = ()=> api.get('/posts')
export const getPostById = (id)=> api.get(`/posts/${id}`)
export const createPost = (post)=> api.post('/posts',post)
export const deletePostById = (id)=> api.delete(`/posts/${id}`)


