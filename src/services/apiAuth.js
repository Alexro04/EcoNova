import axios from "axios";

const BASE_URL = "http://localhost:3000/econova/api/auth";

export async function createUser(newUser) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, newUser);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
