import './Result.scss'
import { Text } from '../../Text/Text'
import Check from '../../../assets/check.png'
import { colorResult, textOnResult } from './Result.helpers'
import { useTranslation } from 'react-i18next'

export const Result = ({ BMI }) => {
  const { t } = useTranslation()

  return (
    <div className={'result'}>
      <div className={'result-line'} />
      <div className={'result-button'} style={{ backgroundColor: colorResult(BMI) }}>
        <img src={Check} />
        <Text>
          {textOnResult(BMI, t)} {BMI}
        </Text>
      </div>
      <div className={'result-line'} />
    </div>
  )
}
