import './LanguagePicker.scss'
import PL from '../../assets/flags/PL.svg'
import GB from '../../assets/flags/GB.svg'
import ES from '../../assets/flags/ES.svg'
import i18n from 'i18next'

export const LanguagePicker = () => {
  const onChangeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const languages = [
    { icon: PL, name: 'pl' },
    { icon: GB, name: 'en' },
    { icon: ES, name: 'es' },
  ]

  return (
    <div>
      {languages.map(({ icon, name }) => (
        <img key={name} src={icon} onClick={() => onChangeLanguage(name)} />
      ))}
    </div>
  )
}
