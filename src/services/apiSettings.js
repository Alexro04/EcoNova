import axios from "axios";

const BASE_URL = "/econova/api/settings/";

export async function getSettings() {
  try {
    const response = await axios.get(`${BASE_URL}/get`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateSettings() {}
