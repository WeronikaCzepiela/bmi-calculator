import { Controller } from 'react-hook-form'
import { RadioGroup } from './RadioGroup'
import { RadioGroupFormTypes } from './RadioGroup.types'

export const RadioGroupForm = (props: RadioGroupFormTypes) => {
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
