import { z } from 'zod'

export const contactInputValidator = z.object({
    firstName: z.string().min(1),
    lastName: z.string(),
    email: z.string().email(),
    phoneNo: z.string(),
    message: z.string().min(1),
})

export type ContactInput = z.infer<typeof contactInputValidator>
