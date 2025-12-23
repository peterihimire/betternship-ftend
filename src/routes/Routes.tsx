import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import { Home } from "../pages/home";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AllRoutes;
