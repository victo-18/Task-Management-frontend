import axios,{isAxiosError} from 'axios'
import { FormPropsFields, TaskForm } from '../Types/uptaskTypes'


type CreateTask ={
    formData:TaskForm,
    projectId:FormPropsFields['_id']
}

export async function createTask( {formData, projectId}:CreateTask){
    console.log(formData,projectId)
    try {
      const {data}= await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/project/${projectId}/task`,formData)  
      return data
    } catch (error) {
        if(isAxiosError(error)&& error.response){
            throw new Error(error.response.data)
        }
    }
}