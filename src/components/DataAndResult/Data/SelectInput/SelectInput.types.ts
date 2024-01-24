import { GroupBase } from 'react-select'

export type SelectInputTypes = {
  options: GroupBase<string>
  label: string
  onChange: VoidFunction
  value: string
}
