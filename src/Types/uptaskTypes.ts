import { z} from 'zod'
import { FormSchema } from '../schema/formSchema'





export type FormPropsFields = z.infer<typeof FormSchema>
export type DraftProject= Pick<FormPropsFields,'clientName'|'description'|'projectName'>