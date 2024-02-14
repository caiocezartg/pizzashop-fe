import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  throw new Error('Invalid environment variables')
}

export const env = _env.data
