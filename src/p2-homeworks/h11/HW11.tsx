import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState(50)

    const onChangeRangeHandler = (num: number) => {
        setValue1(num>value2?value2:num)

    }
    const onChangeRangeHandler2 = (num: number) => {

        setValue2((num<value1)?value1:num)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.firstSpan} >{value1}</span>
                <SuperRange onChangeRange={onChangeRangeHandler}
                            value={value1}
                    // сделать так чтоб value1 изменялось+
                />
            </div>

            <div>
                <span className={s.secondSpan} >{value1}</span>
                <SuperDoubleRange onChangeRange1={onChangeRangeHandler}
                                  onChangeRange2={onChangeRangeHandler2}
                                  value={[value1,value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
