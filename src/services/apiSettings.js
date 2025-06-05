import api from "./api";

export async function getSettings() {
  try {
    const response = await api.get(`/settings/get`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateSettings(data) {
  try {
    const res = await api.post(`/settings/update`, data);
    return res;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
