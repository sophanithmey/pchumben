import { z } from 'zod';

export const memorySchema = z.object({
  name: z
    .string()
    .min(2, { message: 'សូមបញ្ចូលឈ្មោះយ៉ាងតិច ២ តួអក្សរ (Min 2 characters)' })
    .max(80, { message: 'ឈ្មោះមិនអាចលើសពី ៨០ តួអក្សរឡើយ' }),
  relationship: z
    .string()
    .min(2, { message: 'សូមបញ្ជាក់ទំនាក់ទំនង (Relationship required)' })
    .max(50, { message: 'ទំនាក់ទំនងមិនអាចលើសពី ៥០ តួអក្សរឡើយ' }),
  memory: z
    .string()
    .min(10, { message: 'សូមចែករំលែកការចងចាំយ៉ាងតិច ១០ តួអក្សរ (Min 10 characters)' })
    .max(800, { message: 'ការចងចាំមិនអាចលើសពី ៨០០ តួអក្សរឡើយ' }),
  date: z.string().min(4, { message: 'សូមជ្រើសរើសកាលបរិច្ឆេទ' }),
  isPrivate: z.boolean().default(true),
  visualType: z.enum(['lotus', 'candle', 'flower', 'tree']).default('lotus'),
  photo: z.string().optional(),
});

export type MemoryFormData = z.infer<typeof memorySchema>;
