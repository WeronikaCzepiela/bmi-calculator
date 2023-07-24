import * as z from 'zod'

export const poundToKg = (value) => {
  return value * 0.4546
}
export const inchToCm = (value) => {
  return value * 2.54
}

const kgToPounds = (value) => {
  return value * 2.205
}

console.log(kgToPounds(10))

export const schema = z
  .object({
    height: z.string(),
    weight: z.string(),
    sex: z.string(),
    height_unit: z.string().nonempty(),
    weight_unit: z.string().nonempty(),
  })
  .superRefine(({ height, height_unit, weight_unit, weight }, ctx) => {
    const heightNumber = parseInt(height)
    const weightNumber = parseInt(weight)

    if (
      (heightNumber < 100 && height_unit === 'cm') ||
      (heightNumber < 39 && height_unit === 'inch')
    ) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Too small', path: ['height'] })
    }
    if (
      (heightNumber > 350 && height_unit === 'cm') ||
      (heightNumber > 138 && height_unit === 'inch')
    ) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Too big', path: ['height'] })
    }

    if (
      (weightNumber < 10 && weight_unit === 'kg') ||
      (weightNumber < kgToPounds(10) && weight_unit === 'pound')
    ) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Too small', path: ['weight'] })
    }
    if (
      (weightNumber > 1000 && weight_unit === 'kg') ||
      (weightNumber > kgToPounds(1000) && weight_unit === 'pound')
    ) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Too big', path: ['weight'] })
    }
  })
