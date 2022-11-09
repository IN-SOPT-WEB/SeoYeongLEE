import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from "./Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
