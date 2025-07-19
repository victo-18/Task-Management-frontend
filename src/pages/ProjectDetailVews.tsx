import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { getProjectById } from "../routers/project";
import { Loader } from "../components/Loader";
import AddTaskModal from "../components/AddTaskModal";
import { TaskDetail } from "../components/TaskDetail";
import { EditData } from "../components/EditData";

export const ProjectDetailVews = () => {
    const navegate = useNavigate()
  const params = useParams();
  const projectId = params.projectId!;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProjects", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });
  if (isLoading) return <Loader />;
  if (isError) return <Navigate to={"/404"} />;

  if (data)
    return (
      <>
        <h1 className="text-5xl font-black">{data.projectName}</h1>
        <p className=" text-2xl font-light text-gray-500 mt-5">
          {data.description}
        </p>
        <nav>
          <button
            className="bg-purple-500 hover:bg-purple-600 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors mt-5"
            type="button"
            onClick={()=> navegate(location.pathname +'?newTask=true')}
          >
            Add Task
          </button>
        </nav>
        <TaskDetail tasks={data.tasks}/>
        <AddTaskModal/>
        <EditData/>
      </>
    );
};
