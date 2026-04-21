import React from "react";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchData = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const addUser = async (userData) => {
  const responce = await api.post("/posts", userData);
  return responce.data;
};
export const getSingleUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};
export const updateUser = async (userID, updatedData) => {
  const res = await api.patch(`/users/${userID}`, updatedData);
  return res.data;
};
// Data delete karne ke liye
export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data; // Server aksar khali object ya success message bhejta hai
};
