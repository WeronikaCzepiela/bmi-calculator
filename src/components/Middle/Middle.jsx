import './Middle.scss'
import { Chart } from '../Chart/Chart'
import { Data } from '../DataAndResult/Data/Data'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { dimension } from '../../utils/Dimension'

export const Middle = ({ setNewMeasurementsHistory, measurementsHistory }) => {
  const { width } = useWindowDimensions()
  return (
    <div className={`middle ${width > dimension() && 'middle-desktop'}`}>
      <div className={`border-line ${width > dimension() && 'border-line-desktop'}`}>
        <Data setNewMeasurementsHistory={setNewMeasurementsHistory} />
        <Chart measurementsHistory={measurementsHistory} />
      </div>
    </div>
  )
}
