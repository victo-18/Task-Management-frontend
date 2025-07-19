import axios,{isAxiosError} from 'axios'
import { FormPropsFields, TaskForm,Task } from '../Types/uptaskTypes'
//import { TaskSchema } from "../schema/formSchema"



type CreateTask ={
    formData: TaskForm,
    projectId: FormPropsFields['_id']
    editTaskId:Task['_id']
}

export async function createTask( {formData, projectId}:Pick<CreateTask , 'formData'|'projectId'>){

    try {
      const {data}= await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/project/${projectId}/task`,formData)  
        return data
    } catch (error) {
        if(isAxiosError(error)&& error.response){
            throw new Error(error.response.data)
        }
    }
}
//Fuction to fetch a task with id
export async function getTaskByid({projectId,editTaskId}:Pick<CreateTask,'projectId'|'editTaskId'>){
    console.log("id",projectId,editTaskId)
    try {
        const {data}=await axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/project/${projectId}/task/${editTaskId}`)
        return data
    } catch (error) {
       if(isAxiosError(error)&& error.response){
            throw new Error(error.response.data)
        } 
    }
}