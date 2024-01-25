import './RadioGroup.scss'
import { Text } from '../../../Text/Text'
import { useWindowDimensions } from '../../../../utils/hookers/useWindowDimensions'
import { DIMENSION } from '../../../../utils/Dimension'

export const RadioGroup = ({ options, name, label, onChange, defaultValue }) => {
  const { width } = useWindowDimensions()

  const handleChange = (selectedOption) => {
    onChange(selectedOption.target.value)
  }

  return (
    <div className={`radio-group ${width > DIMENSION() && 'radio-group-desktop'}`}>
      <Text type={'l'}>{label}</Text>
      {options.map(({ label, value }) => {
        return (
          <div key={value} className={'radio-option'} onChange={handleChange}>
            <input
              type={'radio'}
              name={name}
              value={value}
              defaultChecked={defaultValue === value}
            />
            <Text>{label}</Text>
          </div>
        )
      })}
    </div>
  )
}
