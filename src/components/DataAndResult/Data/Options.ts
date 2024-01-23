import { TFunction } from 'i18next'

export const optionsSex = (t: TFunction) => [
  { label: t('male'), value: 'male' },
  { label: t('female'), value: 'female' },
]

export const optionsHeight = (t: TFunction) => [
  { label: 'cm', value: 'cm' },
  { label: t('inch'), value: 'inch' },
]

export const optionsWeight = (t: TFunction) => [
  { label: 'kg', value: 'kg' },
  { label: t('pound'), value: 'pound' },
]
