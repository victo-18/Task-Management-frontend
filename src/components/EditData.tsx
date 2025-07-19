
import { useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTaskByid } from '../routers/taskRouterAPI'
import EditTaskModal from './EditTaskModal';
export const EditData = ()=> {
    //this commponent is used to handle the edit of task data
    const location = useLocation();
    //obteniendo el id del proyecto de la url 
    const params = useParams();
    const projectId= params.projectId!;
    const queryParams = new URLSearchParams(location.search);
    //obteniendo el id de la tarea a editar
    const editTaskId = queryParams.get('editTask')!
    
    //Uso de usequery para obtener los datos de la tarea a editar
    const {data}= useQuery({
      queryKey:['task',editTaskId]!,
      queryFn: () => getTaskByid({ projectId, editTaskId }),
      enabled:!! editTaskId
    })
 if(data)return <EditTaskModal data={data}/>
}
