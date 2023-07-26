export const textOnResult = (BMI) => {
  if (BMI < 17) return 'You have too low BMI='
  if (BMI >= 17 && BMI < 18.5) return 'You have a little too low BMI='
  if (BMI >= 18.5 && BMI < 25) return 'You have good BMI='
  if (BMI >= 25 && BMI < 30) return 'You have a little too high BMI='
  if (BMI >= 30) return 'You have too high BMI='
}

export const colorResult = (BMI) => {
  if (BMI < 17 || BMI >= 30) return '#4E1F1F'
  if (BMI >= 17 && BMI < 18.5) return '#4E4C1F'
  if (BMI >= 18.5 && BMI < 25) return '#264E1F'
  if (BMI >= 25 && BMI < 30) return '#4E4C1F'
}
