import './DataAndResult.scss'
import { Data } from './Data/Data'
import { Result } from './Result/Result'
import { Save } from './Save/Save'

export const DataAndResult = () => {
  return (
    <div className={'data-and-result'}>
      <Data />
      <Result />
      <Save />
    </div>
  )
}
