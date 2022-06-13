import React, {useState} from 'react'
import {check18ActionCreator, homeWorkReducer, sortDownActionCreator, sortUpActionCreator} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css"

export type UserType = {
   _id: number
   name: string
   age: number
}

const initialPeople = [
   {_id: 0, name: 'Кот', age: 3},
   {_id: 1, name: 'Александр', age: 66},
   {_id: 2, name: 'Коля', age: 16},
   {_id: 3, name: 'Виктор', age: 44},
   {_id: 4, name: 'Дмитрий', age: 40},
   {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
   const [people, setPeople] = useState<UserType[]>(initialPeople) // + need to fix any
   const checkNumber = 18
   
   // +need to fix any
   const finalPeople = people.map((p: UserType) => (
     <div className={s.conteiner} key={p._id}>
        <span>{p.name}</span>
        <span>{p.age}</span>
     </div>
   ))
   
   const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpActionCreator()))
   const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownActionCreator()))
   const check = () => setPeople(homeWorkReducer(initialPeople, check18ActionCreator(checkNumber)))
   
   return (
     <div>
        <hr/>
        homeworks 8
        <div className={s.wrapper}>{finalPeople}</div>
        <span><SuperButton onClick={sortUp}>sort up</SuperButton></span>
        <span><SuperButton onClick={sortDown}>sort down</SuperButton></span>
        <span><SuperButton onClick={check}>check {checkNumber}</SuperButton></span>
        
        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativePeople/>*/}
        <hr/>
     </div>
   )
}

export default HW8
