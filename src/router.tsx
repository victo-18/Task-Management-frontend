import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp";
import DashboardPages from "./pages/DashboardPages";
import { CreateProject } from "./projects/CreateProject";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<LayoutApp />}>
          <Route path="/" element={<DashboardPages />} index />
          <Route path="/projects/create" element={<CreateProject/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
