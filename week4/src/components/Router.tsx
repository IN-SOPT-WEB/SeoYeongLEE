import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Search from "./Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
