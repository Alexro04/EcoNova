import axios from "axios";

const BASE_URL = "http://localhost:3000/econova/api/bookings";

export async function getBookings({ filter, sort }) {
  let query = `${BASE_URL}/all-bookings${filter || sort ? "?" : ""}`;
  if (filter) query = query + `${filter.name}=${filter.value}`;
  if (sort) query = query + `sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`;

  console.log(query);
  try {
    const response = await axios.get(query);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
