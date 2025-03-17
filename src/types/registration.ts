import { z } from 'zod';

// / -> App.tsx -> HomePage.tsx -> RegistrationFormState & RegistrationFormRefs

// export interface RegistrationFromData {
//   email: string;
//   password: string;
//   favLang: string;
// }

export const registrationSchema = z.object({
  email: z.string().email('Invalid e-mail'),
  password: z.string().min(3, 'Pass should be at least 3 character').max(6, 'To long!'),
  favLang: z.string(),
});

export type RegistrationFromData = z.infer<typeof registrationSchema>;
