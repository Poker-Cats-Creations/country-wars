import * as z from 'zod'

export const SignUpValidation = z.object({
   //userHandler: z.string().min(4, { message: 'Too short' }),
   displayName: z.string().min(2, { message: 'Too short' }),
   email: z.string().email(),
   password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
   confirm_password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
   code: z.string().startsWith('starowl-social', {
      message: 'Invite Codes starts with "starowl-social"',
   }),
   dob: z.date({
      required_error: 'A date of birth is required.',
   }),
})

export const SignInValidation = z.object({
   email: z.string().email(),
   password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
})
