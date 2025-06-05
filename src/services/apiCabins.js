import api from "./api";

export async function getAllCabins() {
  try {
    const response = await api.get(`/cabins/all-cabins`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function deleteCabin(id) {
  try {
    const res = await api.delete(`/cabins/delete/${id}`);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function addCabin(cabin) {
  try {
    const formData = createFormData(cabin);
    const res = await api.post(`/cabins/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Cabin could not be uploaded");
  }
}

export async function editCabin(cabin, id) {
  try {
    const formData = createFormData(cabin);
    const res = await api.post(`/cabins/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Cabin could not be uploaded");
  }
}

function createFormData(cabin) {
  const formData = new FormData();

  for (const key in cabin) {
    if (key !== "cabinImages") formData.append(key, cabin[key]);
  }

  for (const i in cabin.cabinImages) {
    formData.append("cabinImages", cabin.cabinImages[i]);
  }

  return formData;
}
