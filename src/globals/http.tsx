import axios from 'axios';

const baseUrl = "http://localhost:8080/api/todo";

const http = axios.create({
  baseURL: baseUrl,
});

export default http;
