import './Chart.scss'
import React from 'react'
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
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
  const colorResult = (dataValue) =>
    dataValue.map((stringItem) => {
      const item = parseInt(stringItem)
      if (item < 17 || item >= 30) return '#DC483E'
      if ((item >= 17 && item < 18.5) || (item >= 25 && item < 30)) return '#DCB93E'
      if (item >= 18.5 && item < 25) return '#1A9C1F'
    })

  const labels = measurements.map((item) => item.date)
  const dataValue = measurements.map((item) => item.value)
  const count = labels.length.toString()
  console.log(count)

  const dataSet = {
    labels,
    datasets: [
      {
        xAxisID: 'xAxis',
        yAxisID: 'yAxis',
        label: 'Dataset',
        data: dataValue,
        borderWidth: 2,
        elements: {
          line: {
            borderColor: '#353542',
          },
          point: {
            backgroundColor: colorResult(dataValue),
          },
        },
      },
    ],
  }

  const options = {
    options: {
      scales: {
        xAxis: {
          gridLines: {
            color: '#DC483E',
            lineWidth: 2,
          },
        },
      },
    },
    plugins: {
      title: {
        width: 200,
        color: '#FBFBFD',
        display: true,
        text: `Last ${count} saved measurements`,
        font: {
          size: 20,
          family: 'Rubik',
          style: 'regular',
        },
      },
    },
  }

  return (
    <div className={'chart'}>
      <Line data={dataSet} options={options} />
    </div>
  )
}
