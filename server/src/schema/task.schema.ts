import { object, string, TypeOf } from "zod";
import sanitizeHtml from "sanitize-html";

export const createTaskSchema = object({
  body: object({
    title: string().nonempty("Title is required"),
    description: string()
      .transform((value) => sanitizeHtml(value))
      .optional(),
    startDate: string(),
    endDate: string(),
    projectId: string().nonempty("Project ID is required"),
    userId: string().nonempty("User ID is required"),
  }).refine((data) => data.endDate > data.startDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  }),
});

export type CreateTaskInput = TypeOf<typeof createTaskSchema>["body"];
