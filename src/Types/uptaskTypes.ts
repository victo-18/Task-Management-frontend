import { z} from 'zod'
import { Form_Schema, TaskSchema} from '../schema/formSchema'

export type FormPropsFields = z.infer<typeof Form_Schema>
export type DraftProject= Pick<FormPropsFields,'clientName'|'description'|'projectName'>
export type MainTask = z.infer<typeof TaskSchema>
export type Task = z.infer<typeof TaskSchema>
export type TaskForm = Pick<Task, 'name' | 'description'>