import { z } from "zod";

export const contactFormSchema = z
  .object({
    full_name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    type: z.enum(["query", "appointment"], {
      errorMap: () => ({
        message: "Type must be either 'query' or 'appointment'",
      }),
    }),
    preferred_time: z
      .string()
      .optional()
      .refine((val) => !val || !isNaN(Date.parse(val)), {
        message: "Preferred time must be a valid date-time",
      }),
    message: z.string().min(1, "Message is required"),
    service: z
      .enum([
        "Classic Haircut",
        "Beard Trim & Shape",
        "Hot Towel Shave",
        "Fade & Taper Combo",
        "Hair Wash & Style",
      ])
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "appointment") {
      if (!data.service) {
        ctx.addIssue({
          path: ["service"],
          code: z.ZodIssueCode.custom,
          message: "Service is required when type is 'appointment'",
        });
      }
      if (!data.preferred_time) {
        ctx.addIssue({
          path: ["preferred_time"],
          code: z.ZodIssueCode.custom,
          message: "Preferred time is required for an appointment",
        });
      }
    }

    if (data.type === "query") {
      if (data.service) {
        ctx.addIssue({
          path: ["service"],
          code: z.ZodIssueCode.custom,
          message: "Service must be empty when type is 'query'",
        });
      }
      if (data.preferred_time) {
        ctx.addIssue({
          path: ["preferred_time"],
          code: z.ZodIssueCode.custom,
          message: "Preferred time must be empty for queries",
        });
      }
    }
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;
