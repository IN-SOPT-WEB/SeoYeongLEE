import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "./Spinner";
const Search = lazy(() => import("./Search"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search/*" element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
