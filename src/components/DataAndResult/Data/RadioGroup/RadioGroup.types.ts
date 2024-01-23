import { OptionsTypes } from '../TextInput/Options.types'

export type RadioGroupTypes = {
  options: OptionsTypes
  name: string
  label: string
  onChange: VoidFunction
  defaultValue: string
}
