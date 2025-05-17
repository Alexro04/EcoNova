import axios from "axios";

const BASE_URL = "http://localhost:3000/econova/api/bookings";

export async function getBookings({ filter, sort, page }) {
  let query = `${BASE_URL}/all-bookings${filter || sort ? "?" : ""}`;
  if (filter) query = query + `${filter.name}=${filter.value}`;
  if (sort)
    query =
      query +
      `${filter ? "&" : ""}sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`;
  if (page) query = query + `${sort ? "&" : ""}page=${page}`;

  console.log(query);
  try {
    const response = await axios.get(query);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getBooking(bookingId) {
  try {
    const response = await axios.get(`${BASE_URL}/booking/${bookingId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
