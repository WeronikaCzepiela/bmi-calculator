import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationPl = {
  bmi_calculator: 'Kalkulator BMI',
  what_is_bmi: 'Co to jest BMI?',
  parameters: 'Parametry',
  sex: 'Płeć',
  height_unit: 'Jednostka wysokości',
  height: 'Wysokość',
  weight_unit: 'Jednostka wagi',
  weight: 'Waga',
  placeholder: 'Wybierz...',
  save_the_result: 'Zapisz wynik',
  check_my_accounts: 'Sprawdź moje konta',
  male: 'Mężczyzna',
  female: 'Kobieta',
  title: 'Ostatnie zapisane pomiary',
  inch: 'cal',
  pound: 'funt',
}

const translationEn = {
  bmi_calculator: 'BMI Calculator',
  what_is_bmi: 'What is BMI?',
  parameters: 'Parameters',
  sex: 'Sex',
  height_unit: 'Height unit',
  height: 'Height',
  weight_unit: 'Weight unit',
  weight: 'Weight',
  placeholder: 'Select...',
  save_the_result: 'Save the result',
  check_my_accounts: 'Check my accounts',
  male: 'Male',
  female: 'Female',
  title: 'Last {{count}} saved measurement',
  title_other: 'Last {{count}} saved measurements',
  inch: 'inch',
  pound: 'pound',
}

const translationEs = {
  bmi_calculator: 'Calculadora de IMC',
  what_is_bmi: '¿Qué es el IMC? ',
  parameters: 'Parámetros',
  sex: 'Género',
  height_unit: 'Unidad de altura',
  height: 'Altura ',
  weight_unit: 'Unidad de peso',
  weight: 'Peso',
  placeholder: 'Seleccione...',
  save_the_result: 'Guardar el resultado',
  check_my_accounts: 'Comprobar mis cuentas',
  male: 'Hombre',
  female: 'Mujer',
  title: 'Últimas mediciones registradas',
  inch: 'pulgada',
  pound: 'libra',
}

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: translationPl },
    en: { translation: translationEn },
    es: { translation: translationEs },
  },
  lng: 'pl',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})
