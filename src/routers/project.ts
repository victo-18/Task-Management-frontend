import axios, { isAxiosError } from "axios";
import { z, ZodSchema } from "zod";
import { DraftProject, FormPropsFields } from "../Types/uptaskTypes";
import {
  DashboardProjects,
  FormSchemaDataResponse,
} from "../schema/formSchema";

type formDataProps = {
  formData: DraftProject;
  projectId: FormPropsFields["_id"];
};
/**
 * Function to create the project in the database
 * @param project - Data to create project
 * @returns
 */
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
      if (isAxiosError(error) && error.response) {
        throw new Error(
          "Something was going wrong, the project couldn't be created"
        );
      }
    }
  }
}

export async function getAllProjects() {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL_BACKEND}/api/project`
    );
    const result = DashboardProjects.safeParse(data);
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error("The project couldn't be fetching");
    }
  }
}
export async function getProjectById(id: FormPropsFields["_id"]) {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL_BACKEND}/api/project/${id}`
    );
    const result = FormSchemaDataResponse.safeParse(data);
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error("The project couldn't be fetching");
    }
  }
}
export async function updateProject({ formData, projectId }: formDataProps) {
  const projectSchema: ZodSchema<DraftProject> = z.object({
    // Define your schema here
    projectName: z.string(),
    clientName: z.string(),
    description: z.string(),
  });
  const result = projectSchema.safeParse(formData);
  if (!result.success) {
    throw new Error("The project could not be updated");
  }
  try {
    const { data } = await axios.put(
      `${import.meta.env.VITE_URL_BACKEND}/api/project/${projectId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error("The project couldn't be fetching");
    }
  }
}
export async function deleteProject(id: FormPropsFields["_id"]) {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_URL_BACKEND}/api/project/${id}`
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error("The project couldn't be fetching");
    }
  }
}
