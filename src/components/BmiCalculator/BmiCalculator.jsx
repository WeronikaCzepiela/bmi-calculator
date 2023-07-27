import './BmiCalculator.scss'
import { Chart } from '../Chart/Chart'
import { Data } from '../DataAndResult/Data/Data'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { dimension } from '../../utils/Dimension'

export const BmiCalculator = ({ setNewMeasurementsHistory, measurementsHistory }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={`middle ${width > dimension() && 'middle-desktop'}`}>
      <Data setNewMeasurementsHistory={setNewMeasurementsHistory} />
      {measurementsHistory.length !== 0 && <Chart measurementsHistory={measurementsHistory} />}
    </div>
  )
}
