import './App.scss'
import { Header } from './components/Header/Header'
import { Middle } from './components/Middle/Middle'
import { Accounts } from './components/Accounts/Accounts'
import { useState } from 'react'
import moment from 'moment/moment'

export const App = () => {
  const [measurementsHistory, setMeasurementsHistory] = useState([
    JSON.parse(window.localStorage.getItem('BMI-list')),
  ])

  const getDate = () => {
    return moment().format('DD.MM.YYYY')
  }

  const measurements = [
    { date: '24.01.2023', value: '17.63' },
    { date: '24.02.2023', value: '18.94' },
    { date: '24.03.2023', value: '9.84' },
    { date: '24.04.2023', value: '2.40' },
    { date: '24.05.2023', value: '2.88' },
    { date: '24.06.2023', value: '24.00' },
    { date: '24.07.2023', value: '28.80' },
  ]
  const checkIfTheDateIsInTheListAndOverwriteTheData = (bmi) => {
    if (!bmi) return
    const date = getDate()
    const checkDate = measurementsHistory.find((element) => element.date === date)
    let newMeasurementsHistory
    if (!checkDate) {
      newMeasurementsHistory = addNewBmiItem(bmi, date)
    } else
      newMeasurementsHistory = measurementsHistory.map((element) => {
        if (element.date === date) return { ...element, value: bmi }
        else return element
      })
    setMeasurementsHistory(newMeasurementsHistory)
    helpersStorageBmi(newMeasurementsHistory)
  }

  const helpersStorageBmi = (newMeasurementsHistory) => {
    window.localStorage.setItem('BMI-list', JSON.stringify(newMeasurementsHistory))
  }

  const addNewBmiItem = (bmi, date) => {
    return [
      ...measurementsHistory,
      {
        date: date,
        value: bmi,
      },
    ]
  }

  return (
    <div className={'App'}>
      <Header />
      <Middle
        addNewBmiItem={checkIfTheDateIsInTheListAndOverwriteTheData}
        measurementsHistory={measurementsHistory}
      />
      <Accounts />
    </div>
  )
}

export default App
