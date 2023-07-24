import './Data.scss'
import { Text } from '../../Text/Text'
import { useForm } from 'react-hook-form'
import { TextInputForm } from './TextInput/TextInputForm'
import { RadioGroupForm } from './RadioGroup/RadioGroupForm'
import { SelectInputForm } from './SelectInput/SelectInputForm'
import { optionsHeight, optionsSex, optionsWeight } from './Options'
import { zodResolver } from '@hookform/resolvers/zod'
import { inchToCm, poundToKg, schema } from './Data.helpers'
import { Result } from '../Result/Result'
import { Save } from '../Save/Save'

export const Data = () => {
  const {
    control,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      sex: '',
      height_unit: 'cm',
      height: '',
      weight_unit: 'kg',
      weight: '',
    },
    resolver: zodResolver(schema),
  })

  console.log(watch())
  const BMI_calculator = () => {
    let height = getValues('height')
    let weight = getValues('weight')
    const sex = getValues('sex')
    const height_unit = getValues('height_unit')
    const weight_unit = getValues('weight_unit')
    if (height_unit === 'inch') height = inchToCm(height)
    if (weight_unit === 'pound') weight = poundToKg(weight)
    if (height > 100 && height < 350 && weight > 10 && weight < 1000 && sex !== '') {
      return (weight / (height * height)) * 10000
    } else return
  }

  const BMI = BMI_calculator()

  return (
    <div className={'data-and-result'}>
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
      {BMI && <Result BMI={BMI} />}
      <Save />
    </div>
  )
}
