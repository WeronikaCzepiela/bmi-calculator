import './Text.scss'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { dimension } from '../../utils/Dimension'

export const Text = ({ type, children }: TextType) => {
  const { width } = useWindowDimensions()

  if (type === 'h2') {
    return <h2 className={`${width > dimension() && 'h2-desktop'}`}>{children}</h2>
  }
  if (type === 'l') {
    return <label>{children}</label>
  }
  if (type === 'e') {
    return <p className={'error'}>{children}</p>
  }
  if (type === 't') {
    return <p className={`title ${width > dimension() && 'title-desktop'}`}>{children}</p>
  }

  return <p>{children}</p>
}
