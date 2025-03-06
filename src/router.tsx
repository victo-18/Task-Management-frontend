import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp";
import DashboardPages from "./pages/DashboardPages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<LayoutApp />}>
          <Route path="/" element={<DashboardPages />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
