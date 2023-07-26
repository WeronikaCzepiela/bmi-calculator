import { Controller } from 'react-hook-form'
import { SelectInput } from './SelectInput'
import { useTranslation } from 'react-i18next'

export const SelectInputForm = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value } }) => (
        <SelectInput {...props} onChange={onChange} value={value} />
      )}
    />
  )
}
