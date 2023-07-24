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
  const addNewBmiItem = (bmi) => {
    const newBmiList = [
      ...measurementsHistory,
      {
        date: getDate(),
        value: bmi,
      },
    ]
    console.log(newBmiList)
    setMeasurementsHistory(newBmiList)
    window.localStorage.setItem('BMI-list', JSON.stringify(newBmiList))
  }

  return (
    <div className={'App'}>
      <Header />
      <Middle addNewBmiItem={addNewBmiItem} measurementsHistory={measurementsHistory} />
      <Accounts />
    </div>
  )
}

export default App
