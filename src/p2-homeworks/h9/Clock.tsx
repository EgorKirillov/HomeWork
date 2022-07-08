import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./Clock.module.css"

function Clock() {
   const [timerId, setTimerId] = useState<number>(0)
   const [date, setDate] = useState<Date>()
   const [show, setShow] = useState<boolean>(false)
   
   const stop = () => {
      clearTimeout(timerId)
      // stop
   }
   const start = () => {
      stop()
      const id: number = window.setInterval(() => {
         setDate(new Date())
      }, 1000)
      setTimerId(id)
   }
   
   const onMouseEnter = () => {
      setShow(true)
   }
   const onMouseLeave = () => {
      setShow(false)
   }
   
   
   const stringTime = (date)
     ? `${(date.getHours() < 10) ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`
     : "" // fix with date
   
   const stringDate = (date)
     ? `${(date.getDate() < 10) ? "0" + date.getDate() : date.getDate()}.${date.getMonth()+1 < 10 ? '0' + date.getMonth()+1 : date.getMonth()+1}.${date.getFullYear()}`
     : ""// fix with date
   
   return (
     <div>
        <div className={s.conteiner}>
           <div
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
           >
              {stringTime}
           </div>
           
           {show && (
             <div>
                {stringDate}
             </div>
           )}
        </div>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
     
     </div>
   )
}

export default Clock
