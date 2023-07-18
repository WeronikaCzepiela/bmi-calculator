import './Middle.scss'
import { DataAndResult } from '../DataAndResult/DataAndResult'
import { Chart } from '../Chart/Chart'

export const Middle = () => {
  return (
    <div className={'middle'}>
      <DataAndResult />
      <Chart />
    </div>
  )
}
