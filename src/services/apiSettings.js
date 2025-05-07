import axios from "axios";

const BASE_URL = "http://localhost:3000/econova/api/settings";

export async function getSettings() {
  try {
    const response = await axios.get(`${BASE_URL}/get`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateSettings(data) {
  try {
    const res = await axios.post(`${BASE_URL}/update`, data);
    return res;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
