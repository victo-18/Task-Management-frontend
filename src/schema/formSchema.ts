import {z} from 'zod'


export const FormSchema = z.object({
    _id:z.string(),
    projectName:z.string(),
    clientName:z.string(),
    description:z.string(),
})
export const DashboardProjects=z.array(
   FormSchema.pick({
    _id:true,
     projectName:true,
     clientName:true,
     description:true
   })   
)
export const FormSchemaDataResponse = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
  tasks: z.array(z.unknown()), // Si necesitas validación específica, cambia `z.unknown()` a otro esquema.
  createdAt: z.string().datetime(), // Asegura que sea una fecha válida
  updatedAt: z.string().datetime(),
  __v: z.number(),
});