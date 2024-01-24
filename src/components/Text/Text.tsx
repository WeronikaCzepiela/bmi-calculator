import './Text.scss'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { dimension } from '../../utils/Dimension'
import { TextType, TypesOfText } from './Text.types'

export const Text = ({ type, children }: TextType) => {
  const { width } = useWindowDimensions()

  if (type === TypesOfText.H2) {
    return <h2 className={`${width > dimension() && 'h2-desktop'}`}>{children}</h2>
  }
  if (type === TypesOfText.L) {
    return <label>{children}</label>
  }
  if (type === TypesOfText.E) {
    return <p className={'error'}>{children}</p>
  }
  if (type === TypesOfText.T) {
    return <p className={`title ${width > dimension() && 'title-desktop'}`}>{children}</p>
  }

  return <p>{children}</p>
}
