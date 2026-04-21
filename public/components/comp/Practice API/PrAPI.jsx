import axios from "axios";
export const prAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = async () => {
  const res = await prAPI.get("/posts");
  return res.data;
};
export const getPostId = async (id) => {
  const res = await prAPI.get(`/posts/${id}`);
  return res.data;
};
export const updtePost = async (id, updatedPost) => {
  const res = await prAPI.patch(`/posts/${id}`, updatedPost);
  return res.data;
};
export const deletePost = async (id) => {
  const res = await prAPI.get(`/posts/${id}`);
  return res.data;
};
