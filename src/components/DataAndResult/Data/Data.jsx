import './Data.scss'
import { Text } from '../../Text/Text'
import { useForm } from 'react-hook-form'
import { TextInputForm } from './TextInput/TextInputForm'
import { RadioGroupForm } from './RadioGroup/RadioGroupForm'
import { SelectInputForm } from './SelectInput/SelectInputForm'
import { optionsHeight, optionsSex, optionsWeight } from './Options'

export const Data = () => {
  const { control, watch } = useForm({
    defaultValues: {
      sex: '',
      height_unit: 'cm',
      height: '',
      weight_unit: 'kg',
      weight: '',
    },
  })

  console.log(watch())

  return (
    <div className={'data'}>
      <Text type={'h2'}>Parameters</Text>
      <SelectInputForm label={'Sex'} options={optionsSex} control={control} name={'sex'} />
      <RadioGroupForm
        label={'Height unit'}
        options={optionsHeight}
        name={'height_unit'}
        control={control}
      />
      <TextInputForm label={'Height'} name={'height'} control={control} />
      <RadioGroupForm
        label={'Weight unit'}
        options={optionsWeight}
        name={'weight_unit'}
        control={control}
      />
      <TextInputForm label={'Weight'} name={'weight'} control={control} />
    </div>
  )
}
