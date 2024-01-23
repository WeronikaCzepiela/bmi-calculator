import './RadioGroup.scss'
import { Text } from '../../../Text/Text'
import { useWindowDimensions } from '../../../../utils/hookers/useWindowDimensions'
import { dimension } from '../../../../utils/Dimension'
import { RadioGroupTypes } from './RadioGroup.types'
import { TypesOfText } from '../../../Text/Text.types'
import { OptionsTypes } from '../TextInput/Options.types'

export const RadioGroup = ({ options, name, label, onChange, defaultValue }: RadioGroupTypes) => {
  const { width } = useWindowDimensions()

  const handleChange = (selectedOption) => {
    onChange(selectedOption.target.value)
  }

  return (
    <div className={`radio-group ${width > dimension() && 'radio-group-desktop'}`}>
      <Text type={TypesOfText.L}>{label}</Text>
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
