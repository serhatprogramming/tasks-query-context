// services/api.js
import axios from "axios";

const baseURL = "http://localhost:3001/tasks";

const api = axios.create({
  baseURL,
});

export const fetchTasks = async () => {
  const response = await api.get("/");
  return response.data;
};

export const createTask = async (newTask) => {
  const response = await api.post("/", newTask);
  return response.data;
};

export const updateTask = async (taskId, updatedTask) => {
  const response = await api.put(`/${taskId}`, updatedTask);
  return response.data;
};
