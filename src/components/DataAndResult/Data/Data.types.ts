import { Control } from 'react-hook-form'

export type DataTypes = {
  setNewMeasurementsHistory: (bmi: number) => void
}

export type ControlType = Control<
  { sex: string; height_unit: string; height: string; weight_unit: string; weight: string },
  any
>
