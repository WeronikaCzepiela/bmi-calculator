import './Text.scss'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { DIMENSION } from '../../utils/Dimension'

export const Text = ({ type, children }) => {
  const { width } = useWindowDimensions()

  if (type === 'h2') {
    return <h2 className={`${width > DIMENSION() && 'h2-desktop'}`}>{children}</h2>
  }
  if (type === 'l') {
    return <label>{children}</label>
  }
  if (type === 'e') {
    return <p className={'error'}>{children}</p>
  }
  if (type === 't') {
    return <p className={`title ${width > DIMENSION() && 'title-desktop'}`}>{children}</p>
  }

  return <p>{children}</p>
}
