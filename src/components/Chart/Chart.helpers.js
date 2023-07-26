export const colorResult = (dataValue) =>
  dataValue.map((stringItem) => {
    const item = parseInt(stringItem)
    if (item < 17 || item >= 30) return '#DC483E'
    if ((item >= 17 && item < 18.5) || (item >= 25 && item < 30)) return '#DCB93E'
    if (item >= 18.5 && item < 25) return '#1A9C1F'
  })

export const getDateData = (measurements) => {
  return measurements.map((item) => item.date)
}

export const getValueData = (measurements) => {
  return measurements.map((item) => item.value)
}

export const optionChart = {
  options: {
    scaleShowGridLines: true,
    scales: {
      x: {
        min: -1,
        grid: {
          color: '#DC483E',
          lineWidth: 2,
        },
      },
      y: {
        max: 40,
        grid: {
          color: '#DC483E',
          lineWidth: 2,
        },
      },
    },
  },
}
