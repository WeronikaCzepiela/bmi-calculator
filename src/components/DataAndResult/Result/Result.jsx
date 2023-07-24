import './Result.scss'
import { Text } from '../../Text/Text'
import Check from './check.png'

export const Result = ({ BMI }) => {
  const textOnResult = () => {
    if (BMI < 17) return 'You have too low BMI='
    if (BMI >= 17 && BMI < 18.5) return 'You have a little too low BMI='
    if (BMI >= 18.5 && BMI < 25) return 'You have good BMI='
    if (BMI >= 25 && BMI < 30) return 'You have a little too high BMI='
    if (BMI >= 30) return 'You have too high BMI='
  }

  const colorResult = () => {
    if (BMI < 17 || BMI >= 30) return '#4E1F1F'
    if (BMI >= 17 && BMI < 18.5) return '#4E4C1F'
    if (BMI >= 18.5 && BMI < 25) return '#264E1F'
    if (BMI >= 25 && BMI < 30) return '#4E4C1F'
  }

  return (
    <div className={'result'}>
      <div className={'result-line'} />
      <div className={'result-button'} style={{ backgroundColor: colorResult() }}>
        <img src={Check} />
        <Text>
          {' '}
          {textOnResult()} {BMI.toFixed(2)}
        </Text>
      </div>
      <div className={'result-line'} />
    </div>
  )
}
