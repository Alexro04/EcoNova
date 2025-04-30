import styled from "styled-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyles";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: red;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
