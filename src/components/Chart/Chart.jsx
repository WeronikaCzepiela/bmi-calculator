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
import { colorResult, getDateData, getValueData, OPTIONS_CHART } from './Chart.helpers'
import { Text } from '../Text/Text'
import { useWindowDimensions } from '../../utils/hookers/useWindowDimensions'
import { dimension } from '../../utils/Dimension'
import { useTranslation } from 'react-i18next'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)
export const Chart = ({ measurementsHistory }) => {
  const { t } = useTranslation()
  const dateData = getDateData(measurementsHistory)
  const dateValue = getValueData(measurementsHistory)
  const count = getDateData(measurementsHistory).length
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
      <Text type={'t'}>{t('title', { count: count })}</Text>
      <Line data={dataSet} options={OPTIONS_CHART} />
    </div>
  )
}
