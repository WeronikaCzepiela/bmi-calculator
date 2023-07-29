import './Header.scss'
import { Text } from '../Text/Text'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Link } from 'react-router-dom'
import { LanguagePicker } from '../LanguagePicker/LanguagePicker'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <div className={'header'}>
      <nav className={'navigation_buttons'}>
        <div className={'calculator'}>
          <Link to={'/'} className={'link'}>
            <Text>{t('bmi_calculator')}</Text>
            <div className={'line'}></div>
          </Link>
        </div>
        <div className={'description'}>
          <Link to={'/what-is-bmi'} className={'link'}>
            <Text>{t('what_is_bmi')}</Text>
            <div className={'line'}></div>
          </Link>
        </div>
      </nav>
      <LanguagePicker />
    </div>
  )
}
