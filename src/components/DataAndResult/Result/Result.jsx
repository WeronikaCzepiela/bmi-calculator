import './Result.scss'
import { Text } from '../../Text/Text'
import Check from './check.png'
import { colorResult, textOnResult } from './Result.helpers'

export const Result = ({ BMI }) => {
  return (
    <div className={'result'}>
      <div className={'result-line'} />
      <div className={'result-button'} style={{ backgroundColor: colorResult(BMI) }}>
        <img src={Check} />
        <Text>
          {' '}
          {textOnResult(BMI)} {BMI}
        </Text>
      </div>
      <div className={'result-line'} />
    </div>
  )
}
