import './Data.scss'
import { Text } from '../../Text/Text'
import { SelectInput } from './SelectInput/SelectInput'
import { RadioGroup } from './RadioGroup/RadioGroup'

export const Data = () => {
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ]
  return (
    <div className={'data'}>
      <Text type={'h2'}>Parameters</Text>
      <SelectInput options={options} text={'Sex'} onChange={(newValue) => console.log(newValue)} />
      <RadioGroup
        onChange={(newValue) => console.log(newValue)}
        options={[
          { label: 'cm', value: 'cm' },
          { label: 'inch', value: 'inch' },
        ]}
        name={'height'}
        title={'Height unit'}
      />
      <RadioGroup
        onChange={(newValue) => console.log(newValue)}
        options={[
          { label: 'kg', value: 'kg' },
          { label: 'pound', value: 'pound' },
        ]}
        name={'weight'}
        title={'Weight unit'}
      />
    </div>
  )
}
