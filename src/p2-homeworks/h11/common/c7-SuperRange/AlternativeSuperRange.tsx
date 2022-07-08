import React from 'react'
import s from './SuperRange.module.css'
import {Slider} from "@mui/material";

type SuperRangePropsType = {
   onChangeRange?: (value: number) => void
   value: number
};

const AlternativeSuperRange: React.FC<SuperRangePropsType> = (
  {onChangeRange, value}
) => {
   const onChangeHandler = (event: Event, value: number | number[]) => {
      onChangeRange && typeof value === "number" && onChangeRange(value)
   }
   return (
     <div className={s.alternativeSlider}>
        <Slider
          onChange={onChangeHandler}
          value={value}
          size={"small"}
        />
     </div>
   )
}

export default AlternativeSuperRange
