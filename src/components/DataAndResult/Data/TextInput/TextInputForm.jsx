import { TextInput } from './TextInput'
import { Controller } from 'react-hook-form'

export const TextInputForm = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextInput {...props} onChange={onChange} value={value} error={error} />
      )}
    />
  )
}
