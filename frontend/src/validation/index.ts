import { z } from "zod";

export const ValidName = z.object({
  name: z.string(),
})
export const ValidUsername = z.object({
  username: z.string()
})
export const ValidEmail = z.object({
  email: z.string().email()
})
export const ValidPassword = z.object({
  password: z.string().min(6)
})
