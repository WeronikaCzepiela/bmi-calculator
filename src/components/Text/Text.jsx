import './Text.scss'

export const Text = ({ type, children }) => {
  if (type === 'h2') {
    return <h2>{children}</h2>
  }
  if (type === 'l') {
    return <label>{children}</label>
  }
  if (type === 'e') {
    return <p className={'error'}>{children}</p>
  }

  return <p>{children}</p>
}
