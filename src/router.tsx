import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp";
import DashboardPages from "./pages/DashboardPages";
import { CreateProject } from "./projects/CreateProject";
import { EditprojectPages } from "./pages/EditprojectPages";
import { ProjectDetailVews } from "./pages/ProjectDetailVews";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<LayoutApp />}>
          <Route path="/" element={<DashboardPages />} index />
          <Route path="/projects/create" element={<CreateProject/>}/>
          <Route path="/projects/:projectId/create" element={<EditprojectPages/>}/>
          <Route path="/projects/:projectId" element={<ProjectDetailVews/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
