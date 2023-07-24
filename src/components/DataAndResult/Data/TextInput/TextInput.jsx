import './TextInput.scss'
import { Text } from '../../../Text/Text'

export const TextInput = ({ label, onChange, value, error }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }
  return (
    <div className={'input'}>
      <Text type={'l'}>{label}</Text>
      <input className={'input-group'} onInput={handleChange} value={value} type={'number'} />
      <Text type={'e'}>{error?.message}</Text>
    </div>
  )
}
