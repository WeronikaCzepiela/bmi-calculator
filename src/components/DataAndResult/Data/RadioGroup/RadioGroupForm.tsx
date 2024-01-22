import { Controller } from 'react-hook-form'
import { RadioGroup } from './RadioGroup'

export const RadioGroupForm = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup {...props} onChange={onChange} defaultValue={value} />
      )}
    />
  )
}
