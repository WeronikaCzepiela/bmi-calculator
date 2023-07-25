import './Save.scss'
import { useWindowDimensions } from '../../../utils/hookers/useWindowDimensions'
import { dimension } from '../../../utils/Dimension'

export const Save = ({ setNewMeasurementsHistory }) => {
  const helperNewMeasurementsHistory = () => {
    setNewMeasurementsHistory()
  }
  const { width } = useWindowDimensions()

  return (
    <div className={`save ${width > dimension() && 'save-desktop'}`}>
      <button onClick={helperNewMeasurementsHistory}>Save the result</button>
    </div>
  )
}
