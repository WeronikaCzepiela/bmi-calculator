import { OptionsTypes } from '../TextInput/Options.types'
import { ControlType } from '../Data.types'

export type RadioGroupTypes = {
  options: OptionsTypes
  name: 'height' | 'sex' | 'height_unit' | 'weight_unit' | 'weight'
  label: string
  onChange: (arg: string) => void
  defaultValue: string
}

export type RadioGroupFormTypes = {
  label: string
  options: OptionsTypes
  name: 'height' | 'sex' | 'height_unit' | 'weight_unit' | 'weight'
  control: ControlType
}
