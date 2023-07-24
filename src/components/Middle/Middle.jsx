import './Middle.scss'
import { Chart } from '../Chart/Chart'
import { Data } from '../DataAndResult/Data/Data'

export const Middle = ({ addNewBmiItem, measurementsHistory }) => {
  return (
    <div className={'middle'}>
      <Data addNewBmiItem={addNewBmiItem} />
      <Chart measurementsHistory={measurementsHistory} />
    </div>
  )
}
