import ReactSelect from 'react-select'
import './SelectInput.scss'
import { Text } from '../../../Text/Text'
import { customStyles } from './CustomStyles'
import { useWindowDimensions } from '../../../../utils/hookers/useWindowDimensions'
import { dimension } from '../../../../utils/Dimension'
import { useTranslation } from 'react-i18next'

export const SelectInput = ({ options, label, onChange, value }) => {
  const { width } = useWindowDimensions()

  const handleChange = (selectedOption) => {
    onChange(selectedOption.value)
  }

  const defaultValue = () => {
    if (value === '') return
    if (value === 'male') return options[0]
    else return options[1]
  }

  const { t } = useTranslation()

  return (
    <div className={`select ${width > dimension() && 'select-desktop'}`}>
      <Text type={'l'}>{label}</Text>
      <ReactSelect
        className={'select-input'}
        options={options}
        defaultValue={defaultValue()}
        placeholder={t('placeholder')}
        styles={customStyles}
        onChange={handleChange}
      />
    </div>
  )
}
