import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyle from "./styles/GlobalStyles";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Users from "./pages/Users";
import Checkin from "./pages/Checkin";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ProtectedWrapper from "./features/authentication/ProtectedWrapper";
import Account from "./pages/Account";
import AuthLayer from "./context/AuthContext";
import DarkModeProvider from "./context/DarkModeContext";
import CreateBooking from "./pages/CreateBooking";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <BrowserRouter>
          <AuthLayer>
            <Routes>
              <Route
                element={
                  <ProtectedWrapper>
                    <AppLayout />
                  </ProtectedWrapper>
                }>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="account" element={<Account />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="create-booking" element={<CreateBooking />} />
                <Route path="booking/:bookingId" element={<Booking />} />
                <Route path="check-in/:bookingId" element={<Checkin />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthLayer>
        </BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            success: { duration: 2000 },
            error: { duration: 4000 },
            style: {
              backgroundColor: "var(--color-grey-50)",
              color: "var(--color-grey-700)",
              fontSize: "14px",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
