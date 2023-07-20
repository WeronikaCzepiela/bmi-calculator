import './RadioGroup.scss'
import { Text } from '../../../Text/Text'

export const RadioGroup = ({ options, name, title, onChange }) => {
  const handleChange = (selectedOption) => {
    console.log(selectedOption.target.value)
  }

  return (
    <div className={'radio-group'}>
      <Text type={'l'}>{title}</Text>
      {options.map(({ label, value }) => {
        return (
          <div key={value} className={'radio-option'} onChange={handleChange}>
            <input type={'radio'} name={name} value={value} />
            <Text>{label}</Text>
          </div>
        )
      })}
    </div>
  )
}
