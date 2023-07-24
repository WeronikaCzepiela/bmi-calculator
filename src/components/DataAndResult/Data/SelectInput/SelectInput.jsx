import ReactSelect from 'react-select'
import './SelectInput.scss'
import { Text } from '../../../Text/Text'
import { customStyles } from './CustomStyles'

export const SelectInput = ({ options, label, onChange, value }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption.value)
  }

  const defaultValue = () => {
    if (value === '') return
    if (value === 'male') return options[0]
    else return options[1]
  }

  return (
    <div className={'select'}>
      <Text>{label}</Text>
      <ReactSelect
        className={'select-input'}
        options={options}
        defaultValue={defaultValue()}
        placeholder={'Select...'}
        styles={customStyles}
        onChange={handleChange}
      />
    </div>
  )
}
