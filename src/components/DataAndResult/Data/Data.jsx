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
import { useState } from 'react'
import moment from 'moment'

export const Data = ({ setNewMeasurementsHistory }) => {
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

  const calculateBmi = () => {
    let height = getValues('height')
    let weight = getValues('weight')
    const sex = getValues('sex')
    const height_unit = getValues('height_unit')
    const weight_unit = getValues('weight_unit')
    if (height_unit === 'inch') height = inchToCm(height)
    if (weight_unit === 'pound') weight = poundToKg(weight)
    if (height > 100 && height < 350 && weight > 10 && weight < 1000 && sex !== '') {
      const bmi = (weight / (height * height)) * 10000
      return bmi.toFixed(2)
    } else return
  }

  const bmi = calculateBmi()

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
      {bmi && <Result BMI={bmi} />}
      <Save setNewMeasurementsHistory={() => setNewMeasurementsHistory(bmi)} />
    </div>
  )
}
