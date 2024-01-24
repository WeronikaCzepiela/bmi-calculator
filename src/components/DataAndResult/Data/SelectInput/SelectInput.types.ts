import { GroupBase } from 'react-select'
import { OptionsTypes } from '../TextInput/Options.types'
import { ControlType } from '../Data.types'

export type SelectInputTypes = {
  options: OptionsTypes
  label: string
  onChange: (arg: string) => void
  value: string
}

export type SelectInputFormTypes = {
  label: string
  options: OptionsTypes
  control: ControlType
  name: 'sex'
}
