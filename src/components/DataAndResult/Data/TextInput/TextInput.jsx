import './TextInput.scss'
import { Text } from '../../../Text/Text'
import { useWindowDimensions } from '../../../../utils/hookers/useWindowDimensions'
import { dimension } from '../../../../utils/Dimension'

export const TextInput = ({ label, onChange, value, error }) => {
  const { width } = useWindowDimensions()

  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className={`input ${width > dimension() && 'input-desktop'}`}>
      <Text type={'l'}>{label}</Text>
      <input className={'input-group'} onChange={handleChange} value={value} type={'number'} />
      <Text type={'e'}>{error?.message}</Text>
    </div>
  )
}
