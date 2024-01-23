import './BmiDescription.scss'
import { Text } from '../Text/Text'
import { useTranslation } from 'react-i18next'
import { TypesOfText } from '../Text/Text.types'

export const BmiDescription = () => {
  const { t } = useTranslation()

  return (
    <div className={'what_is_bmi'}>
      <Text type={TypesOfText.T}>{t('what_is_bmi')}</Text>
      <div className={'description'}>
        <Text>{t('description')}</Text>
      </div>
      <div className={'buttons_with_description'}>
        <div className={'very_wrong'}>
          <Text>{t('too_low')}</Text>
        </div>
        <div className={'wrong'}>
          <Text>{t('low')}</Text>
        </div>
        <div className={'normal'}>
          <Text>{t('normal')}</Text>
        </div>
        <div className={'wrong'}>
          <Text>{t('high')}</Text>
        </div>
        <div className={'very_wrong'}>
          <Text>{t('too_high')}</Text>
        </div>
      </div>
    </div>
  )
}
