import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};