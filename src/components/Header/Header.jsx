import './Header.scss'
import { Text } from '../Text/Text'

export const Header = () => {
  return (
    <div className={'header'}>
      <div className={'calculator'}>
        <Text>BMI Calculator</Text>
        <div className={'line'}></div>
      </div>
      <div className={'description'}>
        <Text>What is BMI?</Text>
        <div className={'line'}></div>
      </div>
    </div>
  )
}
