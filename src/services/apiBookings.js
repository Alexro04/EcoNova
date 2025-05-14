import axios from "axios";

const BASE_URL = "http://localhost:3000/econova/api/bookings";

export async function getBookings() {
  try {
    const response = await axios.get(`${BASE_URL}/all-bookings`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
