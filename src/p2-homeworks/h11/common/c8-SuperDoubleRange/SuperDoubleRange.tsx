import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange1?: (value: number) => void
    onChangeRange2?: (value: number) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange1, onChangeRange2, value, ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    //const finalRangeClassName = `${s.range} ${className ? className : ''}`

    const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {

        onChangeRange1 && onChangeRange1((+e.currentTarget.value>value[1]) ? value[1]:+e.currentTarget.value)
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange2 && onChangeRange2(+e.currentTarget.value)
    }

    return (

        <>
            <input
                type={'range'}
                onChange={onChangeCallback1}
                // className={finalRangeClassName}
                value={(value) ? value[0] : 1}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={onChangeCallback2}
                // className={finalRangeClassName}
                value={(value) ? value[1] : 1}
                // min={(value) ? value[0] : 1}
                max={100}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

        </>

    )
}

export default SuperDoubleRange
