import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.conteiner}>
            <span className={s.titleName}>{props.affair.name}</span>
            <span className={s.priorityName}>{props.affair.priority}</span>
            <SuperButton className={s.buttonBox} onClick={deleteCallback}> X </SuperButton>

            {/*<button className={s.buttonBox} onClick={deleteCallback}>del</button>*/}
        </div>
    )
}

export default Affair
