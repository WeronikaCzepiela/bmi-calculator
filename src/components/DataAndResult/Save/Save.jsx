import './Save.scss'

export const Save = ({ addNewBmiItem }) => {
  const helperAddNewBmiItem = () => {
    addNewBmiItem()
  }

  return (
    <div className={'save'}>
      <button onClick={helperAddNewBmiItem}>Save the result</button>
    </div>
  )
}
