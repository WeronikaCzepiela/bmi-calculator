import './Middle.scss'
import { Chart } from '../Chart/Chart'
import { Data } from '../DataAndResult/Data/Data'

export const Middle = ({ setNewMeasurementsHistory, measurementsHistory }) => {
  return (
    <div className={'middle'}>
      <Data setNewMeasurementsHistory={setNewMeasurementsHistory} />
      <Chart measurementsHistory={measurementsHistory} />
    </div>
  )
}
