import './Save.scss'
import { useWindowDimensions } from '../../../utils/hookers/useWindowDimensions'
import { DIMENSION } from '../../../utils/Dimension'
import { useTranslation } from 'react-i18next'

export const Save = ({ onClick }) => {
  const { t } = useTranslation()

  const { width } = useWindowDimensions()

  return (
    <div className={`save ${width > DIMENSION() && 'save-desktop'}`}>
      <button onClick={onClick}>{t('save_the_result')}</button>
    </div>
  )
}
