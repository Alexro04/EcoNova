import axios from "axios";

const BASE_URL = "http://localhost:3000/econova/api/auth";

export async function login(credentials) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function createUser(newUser) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, newUser);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getUser(access_token) {
  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
