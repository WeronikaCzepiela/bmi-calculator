import './TextInput.scss'
import { Text } from '../../Text/Text'

export const TextInput = ({ text, onChange }) => {
  const handleChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className={'input'}>
      <Text type={'l'}>{text}</Text>
      <input className={'input-group'} type={'number'} onInput={handleChange} />
    </div>
  )
}
