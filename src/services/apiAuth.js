import api from "./api";

export async function login(credentials) {
  try {
    const response = await api.post(`/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function createUser(newUser) {
  try {
    console.log("New admin", newUser);
    const response = await api.post(`/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateUserData(update, userId) {
  try {
    const formData = createFormData(update);
    const res = await api.post(`/auth/update-data/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function createGuest(guest) {
  try {
    const response = await api.post(`/auth/create-guest`, guest);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateUserPassword(update, userId) {
  try {
    const res = await api.post(`/auth/update-password/${userId}`, update);
    return res;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getAdmins() {
  try {
    const response = await api.get(`/auth/users/admin`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getUser() {
  try {
    const response = await api.get(`/auth/user`);
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
