import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void // ???
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix

    const setHigh = () => {
        props.setFilter('high')
    }

    const setMiddle = () => {
        props.setFilter('middle')
    }

    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <div>
                <SuperButton className={s.buttonPriority} onClick={setAll}> Super All</SuperButton>
                <SuperButton className={s.buttonPriority} onClick={setHigh}> Super High</SuperButton>
                <SuperButton className={s.buttonPriority} onClick={setMiddle}> Super Middle</SuperButton>
                <SuperButton className={s.buttonPriority} onClick={setLow}> Super Low</SuperButton>

                {/*<button className={s.buttonPriority} onClick={setAll}>All</button>*/}
                {/*<button className={s.buttonPriority} onClick={setHigh}>High</button>*/}
                {/*<button className={s.buttonPriority} onClick={setMiddle}>Middle</button>*/}
                {/*<button className={s.buttonPriority} onClick={setLow}>Low</button>*/}
            </div>
        </div>
    )
}

export default Affairs
