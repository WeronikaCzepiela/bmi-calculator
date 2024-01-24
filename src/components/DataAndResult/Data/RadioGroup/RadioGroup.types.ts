import { OptionsTypes } from '../TextInput/Options.types'
import { ControlType } from '../Data.types'

export type RadioGroupTypes = {
  options: OptionsTypes
  name: string
  label: string
  onChange: VoidFunction
  defaultValue: string
}

export type RadioGroupFormTypes = {
  label: string
  options: OptionsTypes
  name: string
  control: ControlType
}
