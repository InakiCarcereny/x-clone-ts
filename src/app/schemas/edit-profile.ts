import { z } from 'zod';

const editProfileSchema = z.object({
  name: z.string().optional(),
  bio: z.string().optional(),
  location: z.string().optional(),
  website: z.string().optional(),
  avatar: z.string().optional(),
  banner: z.string().optional(),
});

export type EditProfile = z.infer<typeof editProfileSchema>;

export default editProfileSchema;
