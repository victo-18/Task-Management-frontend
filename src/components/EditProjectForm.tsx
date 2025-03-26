import { Link, useNavigate } from "react-router-dom";
import { DraftProject } from "../Types/uptaskTypes";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProjectForm from "../projects/ProjectForm";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../routers/project";
import { toast } from "react-toastify";
type ProjectProps = {
  data: DraftProject;
  projectId: string;
};
export const EditProjectForm = ({ data, projectId }: ProjectProps) => {
    const navegate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectName: data.clientName,
      clientName: data.clientName,
      description: data.description,
    },
  });
  const queryClient = useQueryClient()
const { mutate } = useMutation({
    mutationFn: updateProject,
    onError: () => {
        return <Navigate to={"/404"} />;
    },
  
    onSuccess: (data) => {
      //Eliminando los datos cacheados con query
      queryClient.invalidateQueries({queryKey:['projects']})
      queryClient.invalidateQueries({queryKey:['editProjects', projectId]})
        toast.success(data.message,{
            theme:"dark"
        });
        console.log(data)
      
    },
});

  const handleData = (formData: DraftProject) => {
    const data = { formData, projectId };
    mutate(data);
    navegate('/')
  };
  return (
    <>
      <div className=" max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Edit project</h1>
        <p className="text-2xl text-gray-500 mt-5 font-light">
          Fill the form to edit a project
        </p>
        <nav className=" mt-5">
          <Link
            to={"/"}
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          >
            Back to projects
          </Link>
        </nav>
        <form
          className="mt-10 bg-white p-5 shadown-lg rounded-lg"
          onSubmit={handleSubmit(handleData)}
          noValidate
        >
          <ProjectForm register={register} errors={errors} />
          <input
            type="submit"
            value={"Save changes"}
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors w-full"
          />
        </form>
      </div>
    </>
  );
};
