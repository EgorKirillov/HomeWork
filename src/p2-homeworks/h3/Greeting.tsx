import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, totalUsers, ...props}) => {
    const inputClass = ` ${s.someClass} ${props.error ? s.errorCl : ""} ` // need to fix with (?:)

    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onEnter={addUser}
                error={props.error}
                className={inputClass}
                spanClassName={s.testSpanError}
            />
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}

            <SuperButton onClick={addUser}> Super add </SuperButton>
            <span>{totalUsers}</span>

            {/*<button onClick={addUser}>add</button>*/}
            {/*{props.error && <div className={s.errorDiv}>{props.error}</div>}*/}
        </div>
    )
}

export default Greeting
