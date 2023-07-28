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
import { colorResult, getDateData, getValueData, optionChart } from './Chart.helpers'
import { Text } from '../Text/Text'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { dimension } from '../../utils/Dimension'
import { Trans, useTranslation } from 'react-i18next'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)
export const Chart = ({ measurementsHistory }) => {
  const { t } = useTranslation()

  const measurements = [
    { date: '24.01.2023', value: '17.63' },
    { date: '24.02.2023', value: '18.94' },
    { date: '24.03.2023', value: '9.84' },
    { date: '24.04.2023', value: '2.40' },
    { date: '24.05.2023', value: '2.88' },
    { date: '24.06.2023', value: '24.00' },
    { date: '24.07.2023', value: '28.80' },
    { date: '24.08.2023', value: '2.88' },
    { date: '24.09.2023', value: '24.00' },
    { date: '24.10.2023', value: '28.80' },
    { date: '24.11.2023', value: '24.00' },
    { date: '24.12.2023', value: '28.80' },
  ]

  const dateData = getDateData(measurements)
  const dateValue = getValueData(measurements)
  const count = getDateData(measurements).length
  const { width } = useWindowDimensions()

  const dataSet = {
    labels: dateData,
    datasets: [
      {
        label: 'Dataset',
        data: dateValue,
        borderWidth: 2,
        elements: {
          line: {
            borderColor: '#353542',
          },
          point: {
            backgroundColor: colorResult(dateValue),
            radius: 5,
          },
        },
      },
    ],
  }

  return (
    <div className={`chart ${width > dimension() && 'chart-desktop'}`}>
      <Text type={'t'}> {t('title', { count: count })}</Text>
      <Line data={dataSet} options={optionChart} />
    </div>
  )
}
