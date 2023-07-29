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
  title_one: 'Ostatni zapisany pomiar',
  title_few: 'Ostatnie {{count}} zapisane pomiary',
  title_many: 'Ostatnie {{count}} zapisanych pomiarów',
  inch: 'cal',
  pound: 'funt',
  description:
    'BMI to skrót od Body Mass Index (wskaźnik masy ciała). Jest to wartość liczbowa pochodząca od wzrostu i wagi danej osoby.\n' +
    '          wzrostu i wagi i jest powszechnie stosowana do oceny, czy dana osoba ma zdrową masę ciała w stosunku do swojego wzrostu.\n' +
    '          w stosunku do swojego wzrostu. BMI to szybki i łatwy sposób na oszacowanie, czy\n' +
    '          ktoś ma niedowagę, normalną wagę, nadwagę lub jest otyły.',
  too_low: 'Wartość poniżej 17 wskazuje na wychudzenie.',
  low: 'Wartość mieszcząca się w zakresie: 17 - 18,5 wskazuje na\n' + '            niedowagę.',
  normal: 'Wartość mieszcząca się w zakresie: 18,5 - 25 jest wartością prawidłową.',
  high: 'Wartość mieszcząca się w zakresie: 25 - 30 wskazuje na nadwagę.',
  too_high: 'Wartość większa niż 30 oznacza otyłość.',
  too_low_text: 'Masz za niskie BMI =',
  low_text: 'Masz trochę za niskie BMI =',
  normal_text: 'Masz dobre BMI =',
  high_text: 'Masz trochę za wysokie BMI =',
  too_high_text: 'Masz za wysokie BMI =',
  too_small: 'Za mało',
  too_big: 'Za dużo',
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
  title_one: 'Last {{count}} saved measurement',
  title_other: 'Last {{count}} saved measurements',
  inch: 'inch',
  pound: 'pound',
  description:
    "BMI stands for Body Mass Index. It is a numerical value derived from an individual's\n" +
    '          height and weight and is commonly used to assess whether a person has a healthy body\n' +
    '          weight in relation to their height. BMI is a quick and easy way to estimate whether\n' +
    '          someone is underweight, normal weight, overweight, or obese.',
  too_low: 'A value less than 17 indicates emaciation.',
  low:
    "A value that falls within the range: 17 - 18.5, indicates\\n' +\n" + '          underweight.',
  normal: 'A value that falls within the range: 18.5 - 25 is the correct value. ',
  high: 'A value that falls within the range: 25 - 30 indicates overweight.',
  too_high: 'A value greater than 30 speaks of obesity.',
  too_low_text: 'You have too low BMI =',
  low_text: 'You have a little too low BMI =',
  normal_text: 'You have good BMI =',
  high_text: 'You have a little too high BMI =',
  too_high_text: 'You have too high BMI =',
  too_small: 'Too small',
  too_big: 'Too big',
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
  description:
    'IMC son las siglas de Índice de Masa Corporal. Es un valor numérico derivado de la altura y el peso de una persona.\n' +
    '          peso de una persona y se suele utilizar para evaluar si una persona tiene un peso\n' +
    '          en relación con su estatura. El IMC es una forma rápida y sencilla de estimar si\n' +
    '          si una persona tiene un peso inferior al normal, un peso normal, sobrepeso u obesidad.',
  too_low: 'Un valor inferior a 17 indica emaciación.',
  low: 'Un valor que cae dentro del rango 17 - 18,5, por otra parte, indica bajo peso.',
  normal: 'Un valor que esté dentro del intervalo 18,5 - 25 es el valor correcto.',
  high: 'Un valor comprendido entre 25 y 30 indica sobrepeso.',
  too_high: 'Un valor superior a 30 habla de obesidad.',
  too_low_text: 'Tienes un IMC demasiado bajo =',
  low_text: 'Tienes un IMC un poco bajo =',
  normal_text: 'Tienes un buen IMC =',
  high_text: 'Tienes un IMC un poco alto =',
  too_high_text: 'Tienes un IMC demasiado alto =',
  too_small: 'Demasiado pequeño',
  too_big: 'Demasiado grande',
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
