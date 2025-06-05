import api from "./api";
import { PAGE_LIMIT } from "../utils/constants";
import { getToday } from "../utils/helpers";

export async function getBookings({ filter, sort, page }) {
  let query = `/bookings/all-bookings${filter || sort ? "?" : ""}`;
  if (filter) query = query + `${filter.name}=${filter.value}`;
  if (sort)
    query =
      query +
      `${filter ? "&" : ""}sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`;
  query = query + `${sort ? "&" : ""}limit=${PAGE_LIMIT}`;
  if (page) query = query + `${sort ? "&" : ""}page=${page}`;

  try {
    const response = await api.get(query);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getBookingsAfterDate(date) {
  try {
    const response = await api.get(
      `/bookings/bookings-between-dates?afterDate=${date}&beforeDate=${getToday()}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getStaysAfterDate({ date }) {
  try {
    const response = await api.get(
      `/bookings/stays-between-dates?afterDate=${date}&beforeDate=${getToday()}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getTodayActivities() {
  try {
    const response = await api.get(`/bookings/today-activities`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getBooking(bookingId) {
  try {
    const response = await api.get(`/bookings/booking/${bookingId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function updateBooking(bookingId, updates) {
  try {
    const response = await api.post(`/bookings/update/${bookingId}`, updates);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function deleteBooking(bookingId) {
  try {
    const response = await api.delete(`/bookings/delete/${bookingId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function createBooking(data) {
  try {
    const response = await api.post(`/bookings/create`, {
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
