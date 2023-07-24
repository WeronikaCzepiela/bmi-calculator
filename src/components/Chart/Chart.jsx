import './Chart.scss'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)
export const Chart = ({ measurementsHistory }) => {
  const measurements = [
    { date: '24.01.2023', value: '17.63' },
    { date: '24.02.2023', value: '18.94' },
    { date: '24.03.2023', value: '9.84' },
    { date: '24.04.2023', value: '2.40' },
    { date: '24.05.2023', value: '2.88' },
    { date: '24.06.2023', value: '24.00' },
    { date: '24.07.2023', value: '28.80' },
  ]

  const labels = measurements.map((item) => item.date)

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: measurements.map((item) => item.value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <div className={'chart'}>
      <Line data={data} />
    </div>
  )
}
