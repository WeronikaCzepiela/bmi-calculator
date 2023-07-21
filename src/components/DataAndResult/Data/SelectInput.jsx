import ReactSelect from 'react-select'
import './SelectInput.scss'
import { Text } from '../../Text/Text'

export const SelectInput = ({ options, text, onChange }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption.value)
  }

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      defaultStyles,
      backgroundColor: state.isSelected ? '#101019' : '#101019',
      color: state.isSelected ? '#AAAABF' : '#AAAABF',
    }),

    indicatorSeparator: (defaultStyles, state) => ({
      ...defaultStyles,
      defaultStyles,
      backgroundColor: '#101019',
    }),

    menuList: (defaultStyles, state) => ({
      ...defaultStyles,
      defaultStyles,
      backgroundColor: '#101019',
      borderWidth: 5,
      borderColor: '#353542',
      color: '#AAAABF',
      borderRadius: 6,
    }),

    control: (defaultStyles, state) => ({
      ...defaultStyles,
      defaultStyles,
      backgroundColor: '#101019',
      borderColor: '#353542',
      borderRadius: 6,
      color: '#AAAABF',
    }),
  }

  return (
    <div className={'select'}>
      <Text>{text}</Text>
      <ReactSelect
        className={'select-input'}
        options={options}
        placeholder={'Select...'}
        styles={customStyles}
        onChange={handleChange}
      />
    </div>
  )
}
