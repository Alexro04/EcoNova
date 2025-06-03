import axios from "axios";
import { PAGE_LIMIT } from "../utils/constants";
import { getToday } from "../utils/helpers";

const BASE_URL = "http://localhost:3000/econova/api/bookings";

export async function getBookings({ filter, sort, page }) {
  let query = `${BASE_URL}/all-bookings${filter || sort ? "?" : ""}`;
  if (filter) query = query + `${filter.name}=${filter.value}`;
  if (sort)
    query =
      query +
      `${filter ? "&" : ""}sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`;
  query = query + `${sort ? "&" : ""}limit=${PAGE_LIMIT}`;
  if (page) query = query + `${sort ? "&" : ""}page=${page}`;

  try {
    const response = await axios.get(query);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getBookingsAfterDate(date) {
  try {
    const response = await axios.get(
      `${BASE_URL}/bookings-between-dates?afterDate=${date}&beforeDate=${getToday()}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getStaysAfterDate({ date }) {
  try {
    const response = await axios.get(
      `${BASE_URL}/stays-between-dates?afterDate=${date}&beforeDate=${getToday()}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getTodayActivities() {
  try {
    const response = await axios.get(`${BASE_URL}/today-activities`);
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

export async function updateBooking(bookingId, updates) {
  try {
    const response = await axios.post(
      `${BASE_URL}/update/${bookingId}`,
      updates
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function deleteBooking(bookingId) {
  try {
    const response = await axios.delete(`${BASE_URL}/delete/${bookingId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function createBooking(data) {
  try {
    const response = await axios.post(`${BASE_URL}/create`, {
      ...data,
      status: "unconfirmed",
      hasPaid: false,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
