import './Save.scss'
import { useWindowDimensions } from '../../../utils/hookers/useWindowDimensions'
import { dimension } from '../../../utils/Dimension'
import { useTranslation } from 'react-i18next'

export const Save = ({ onClick }) => {
  const { t } = useTranslation()

  const { width } = useWindowDimensions()

  return (
    <div className={`save ${width > dimension() && 'save-desktop'}`}>
      <button onClick={onClick}>{t('save_the_result')}</button>
    </div>
  )
}
