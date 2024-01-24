import { Controller } from 'react-hook-form'
import { SelectInput } from './SelectInput'
import { SelectInputFormTypes } from './SelectInput.types'

export const SelectInputForm = (props: SelectInputFormTypes) => {
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
