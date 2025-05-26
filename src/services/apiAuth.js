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
    console.log("New admin", newUser);
    const response = await axios.post(`${BASE_URL}/register`, newUser);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateUserData(update, userId) {
  try {
    const formData = createFormData(update);
    const res = await axios.post(
      `${BASE_URL}/update-data/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateUserPassword(update, userId) {
  try {
    const res = await axios.post(
      `${BASE_URL}/update-password/${userId}`,
      update
    );
    return res;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getAdmins() {
  try {
    const response = await axios.get(`${BASE_URL}/users/admin`);
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

function createFormData(userData) {
  const formData = new FormData();

  for (const key in userData) {
    formData.append(key, userData[key]);
  }

  return formData;
}
