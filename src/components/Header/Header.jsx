import './Header.scss'
import { Text } from '../Text/Text'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

const onChangeLanguage = (event) => {
  i18n.changeLanguage(event.target.value)
}

export const Header = () => {
  const { t } = useTranslation()

  return (
    <div className={'header'}>
      <div className={'calculator'}>
        <Text>{t('bmi_calculator')}</Text>
        <div className={'line'}></div>
      </div>
      <div className={'description'}>
        <Text>{t('what_is_bmi')}</Text>
        <div className={'line'}></div>
      </div>
      <select id='language' onChange={onChangeLanguage}>
        <option value={'pl'} className={'pl'}>
          PL
        </option>
        <option value={'en'} className={'en'}>
          EN
        </option>
        <option value={'es'} className={'es'}>
          ES
        </option>
      </select>
    </div>
  )
}
