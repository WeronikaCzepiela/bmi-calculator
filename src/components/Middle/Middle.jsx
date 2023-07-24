import './Middle.scss'
import { Chart } from '../Chart/Chart'
import { Data } from '../DataAndResult/Data/Data'

export const Middle = () => {
  return (
    <div className={'middle'}>
      <Data />
      <Chart />
    </div>
  )
}
