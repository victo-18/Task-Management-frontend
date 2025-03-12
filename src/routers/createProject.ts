import axios from "axios";
import { z, ZodSchema } from "zod";
import { DraftProject } from "../Types/uptaskTypes";
export async function createProject(project: DraftProject) {
  const projectSchema: ZodSchema<DraftProject> = z.object({
    // Define your schema here
    projectName: z.string(),
    clientName: z.string(),
    description: z.string(),
  });
  const result = projectSchema.safeParse(project);

  if (result.success) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/api/project`,
         project 
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
