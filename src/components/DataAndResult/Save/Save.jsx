import './Save.scss'

export const Save = ({ setNewMeasurementsHistory }) => {
  const helperNewMeasurementsHistory = () => {
    setNewMeasurementsHistory()
  }

  return (
    <div className={'save'}>
      <button onClick={helperNewMeasurementsHistory}>Save the result</button>
    </div>
  )
}
