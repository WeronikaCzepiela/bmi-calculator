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
import { ChartTypes } from './Chart.types'
import { TypesOfText } from '../Text/Text.types'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)
export const Chart = ({ measurementsHistory }: ChartTypes) => {
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
      <Text type={TypesOfText.T}>{t('title', { count: count })}</Text>
      {/* @ts-expect-error */}
      <Line data={dataSet} options={OPTIONS_CHART} />
    </div>
  )
}
