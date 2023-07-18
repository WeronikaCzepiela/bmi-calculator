import './Data.scss'
import { Text } from '../../Text/Text'
import { SelectInput } from './SelectInput/SelectInput'

export const Data = () => {
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ]
  return (
    <div className={'data'}>
      <Text type={'h2'}>Parameters</Text>

      <div className={'sex'}>
        <SelectInput options={options} text={'Sex'} />
      </div>
    </div>
  )
}
