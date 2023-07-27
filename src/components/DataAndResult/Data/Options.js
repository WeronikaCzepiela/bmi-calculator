import { useTranslation } from 'react-i18next'

export const optionsSex = (t) => [
  { value: 'male', label: t('male') },
  { value: 'female', label: t('female') },
]

export const optionsHeight = (t) => [
  { label: 'cm', value: 'cm' },
  { label: t('inch'), value: 'inch' },
]

export const optionsWeight = (t) => [
  { label: 'kg', value: 'kg' },
  { label: t('pound'), value: 'pound' },
]
