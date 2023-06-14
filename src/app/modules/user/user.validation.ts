import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role Is Required!',
    }),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}

// await createUserZodSchema.parseAsync(req)
// Req - Validtion
// Body -- Object
// Data - Object
