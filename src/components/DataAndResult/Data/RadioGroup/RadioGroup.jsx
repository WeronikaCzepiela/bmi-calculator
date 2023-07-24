import './RadioGroup.scss'
import { Text } from '../../../Text/Text'

export const RadioGroup = ({ options, name, label, onChange, defaultValue }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption.target.value)
  }

  return (
    <div className={'radio-group'}>
      <Text type={'l'}>{label}</Text>
      {options.map(({ label, value }) => {
        return (
          <div key={value} className={'radio-option'} onChange={handleChange}>
            <input type={'radio'} name={name} value={value} checked={defaultValue === value} />
            <Text>{label}</Text>
          </div>
        )
      })}
    </div>
  )
}
