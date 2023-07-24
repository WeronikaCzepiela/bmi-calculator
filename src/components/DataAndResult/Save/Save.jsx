import './Save.scss'
import { useState } from 'react'

export const Save = ({ bmi, addNewBmiItem }) => {
  const helperAddNewBmiItem = () => {
    addNewBmiItem()
  }

  return (
    <div className={'save'}>
      <button onClick={helperAddNewBmiItem}>Save the result</button>
    </div>
  )
}
