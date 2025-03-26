import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Navigate } from "react-router-dom"
import { getProjectById } from "../routers/project"
import { EditProjectForm } from "../components/EditProjectForm"

export const EditprojectPages = () => {
    const params = useParams()
   const projectId = params.projectId!
   const { data, isLoading,isError } = useQuery({
    queryKey: ['editProjects', projectId],
    queryFn: () => getProjectById(projectId),
    retry:false
   })
   if(isLoading)return "Cargando datos..."
   if(isError) return <Navigate to={"/404"}/>
   if(data) return <EditProjectForm data={data} projectId={projectId}/>
   
  
}


