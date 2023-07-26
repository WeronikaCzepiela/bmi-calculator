import './Accounts.scss'
import LinkedIn from './images/LinkedIn.png'
import GitHub from './images/GitHub.png'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { dimension } from '../../utils/Dimension'
import { useTranslation } from 'react-i18next'

export const Accounts = () => {
  const { width } = useWindowDimensions()
  const { t } = useTranslation()

  return (
    <div className={`accounts ${width > dimension() && 'accounts-desktop'}`}>
      <p className={`accounts-text ${width > dimension() && 'accounts-text-desktop'}`}>
        {t('check_my_accounts')}
      </p>
      <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'}>
        <img src={GitHub} />
      </a>
      <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'}>
        <img src={LinkedIn} />
      </a>
    </div>
  )
}
