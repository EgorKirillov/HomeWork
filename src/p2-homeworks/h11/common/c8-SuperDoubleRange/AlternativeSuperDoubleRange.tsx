import { Slider } from '@mui/material'
import React from 'react'
import s from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
   onChangeRange1?: (value: number) => void
   onChangeRange2?: (value: number) => void
   value: [number, number]
}

const AlternativeSuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  { onChangeRange1, onChangeRange2, value}
) => {
      const onChange =(event: Event,     value:  number | number[]) => {
      onChangeRange1 && typeof value === "object" && onChangeRange1(value[0])
      onChangeRange2 && typeof value === "object" && onChangeRange2(value[1])
   }
   
   return (
     <div className={s.alternativeSlider}>
        <Slider
          onChange={onChange}
          value={value}
          size={"small"}
          disableSwap
        />
     </div>
   )
}

export default AlternativeSuperDoubleRange
