import { useTranslation } from 'react-i18next'

export const optionsSex = (t) => [
  { value: 'male', label: t('male') },
  { value: 'female', label: t('female') },
]

export const optionsHeight = [
  { label: 'cm', value: 'cm' },
  { label: 'inch', value: 'inch' },
]

export const optionsWeight = [
  { label: 'kg', value: 'kg' },
  { label: 'pound', value: 'pound' },
]
