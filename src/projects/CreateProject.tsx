import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProjectForm from "./ProjectForm";
import{DraftProject} from '../Types/uptaskTypes'
import { createProject } from "../routers/createProject";
import {toast}from 'react-toastify'
export const CreateProject = () => {
  const navegate = useNavigate()
  const initialValues:DraftProject = {
    projectName: "",
    clientName: "",
    description: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const handleData = async (data:DraftProject) => {
    const response = await createProject(data);
    if(response){
      toast.success(`${response.message}`,{
        theme:'dark'
      })
    }
   return navegate('/')
  };
  return (
    <>
    <div className=" max-w-3xl mx-auto">
      <h1 className="text-5xl font-black">My projects</h1>
      <p className="text-2xl text-gray-500 mt-5 font-light">
        Fill the form to create a new project
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
        <ProjectForm register={register} errors={errors}/>
        <input 
         type="submit"
         value={"Create project"}
         className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors w-full"
        />
      </form>
      </div>
    </>
  );
};
