import { z } from "zod";

export const Form_Schema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
});
export const DashboardProjects = z.array(
  Form_Schema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true,
  })
);
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
/** Task schema */
export const taskStatus = z.enum([
  "pending",
  "onHold",
  "inPtogress",
  "underReview",
  "complete",
]);
export const TaskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  project: z.string(),
  status: taskStatus,
});
