import './RadioGroup.scss'
import { Text } from '../../../Text/Text'

export const RadioGroup = ({ options, name, title, onChange }) => {
  const handleChange = () => {
    console.log(options)
  }

  return (
    <div className={'check-box'}>
      <Text type={'l'}>{title}</Text>
      {options.map(({ label, value }) => {
        return (
          <div key={value}>
            <input type={'radio'} name={name} onChange={handleChange} />
            <Text>{label}</Text>
          </div>
        )
      })}
    </div>
  )
}
