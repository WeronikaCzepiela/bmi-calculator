import './App.scss'
import * as React from 'react'
import { Header } from './components/Header/Header'
import { BmiCalculator } from './components/BmiCalculator/BmiCalculator'
import { Accounts } from './components/Accounts/Accounts'
import { useState } from 'react'
import {
  addNewMeasure,
  changeMeasure,
  getDate,
  getMeasurementsFromLocalStorage,
  isMeasureFromTheDate,
  saveMeasurementsToLocalStorage,
} from './App.helpers'
import './utils/i18.config'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { BmiDescription } from './components/BmiDescription/BmiDescription'

export const App = () => {
  const [measurementsHistory, setMeasurementsHistory] = useState(getMeasurementsFromLocalStorage())

  const setNewMeasurementsHistory = (bmi) => {
    if (!bmi) return

    const date = getDate()
    let newMeasurementsHistory

    if (!isMeasureFromTheDate(measurementsHistory, date)) {
      newMeasurementsHistory = addNewMeasure(measurementsHistory, bmi, date)
    } else {
      newMeasurementsHistory = changeMeasure(measurementsHistory, bmi, date)
    }
   setMeasurementsHistory(newMeasurementsHistory)
    saveMeasurementsToLocalStorage(newMeasurementsHistory)
  }


console.log(measurementsHistory) 
  return (
    <div className={'App'}>
      <Header />
      <Routes>
        <Route
          path={'/'}
          element={
            <BmiCalculator
              setNewMeasurementsHistory={setNewMeasurementsHistory}
              measurementsHistory={measurementsHistory}
            />
          }
        />
        <Route path={'/what-is-bmi'} element={<BmiDescription />} />
      </Routes>
      <Accounts />
    </div>
  )
}

export default App
