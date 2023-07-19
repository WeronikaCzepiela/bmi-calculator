import './Result.scss'
import { Text } from '../../Text/Text'
import Check from './check.png'

export const Result = () => {
  const bmi = 22

  const textOnResult = () => {
    if (bmi < 17) return 'You have to low BMI'
    if (bmi >= 17 && bmi < 18.5) return 'You have a little to low BMI'
    if (bmi >= 18.5 && bmi < 25) return 'You have good BMI'
    if (bmi >= 25 && bmi < 30) return 'You have a little to high BMI'
    if (bmi >= 30) return 'You have to  high BMI'
  }

  const colorResult = () => {
    if (bmi < 17 || bmi >= 30) return '#4E1F1F'
    if (bmi >= 17 && bmi < 18.5) return '#4E4C1F'
    if (bmi >= 18.5 && bmi < 25) return '#264E1F'
    if (bmi >= 25 && bmi < 30) return '#4E4C1F'
  }

  return (
    <div className={'result'}>
      <div className={'line'} />
      <div className={'result-button'} style={{ backgroundColor: colorResult() }}>
        <img src={Check} />
        <Text> {textOnResult()} </Text>
      </div>
      <div className={'line'} />
    </div>
  )
}
