import { TFunction } from 'i18next'

export const textOnResult = (BMI: number, t: TFunction) => {
  if (BMI < 17) return t('too_low_text')
  if (BMI >= 17 && BMI < 18.5) return t('low_text')
  if (BMI >= 18.5 && BMI < 25) return t('normal_text')
  if (BMI >= 25 && BMI < 30) return t('high_text')
  if (BMI >= 30) return t('too_high_text')
}

export const colorResult = (BMI: number) => {
  if (BMI < 17 || BMI >= 30) return '#4E1F1F'
  if ((BMI >= 17 && BMI < 18.5) || (BMI >= 25 && BMI < 30)) return '#4E4C1F'
  if (BMI >= 18.5 && BMI < 25) return '#264E1F'
}
