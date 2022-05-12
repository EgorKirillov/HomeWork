import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'


// types
export type UserType = {
    _id: string // need to fix any --- >string
    name: string // need to fix any --- >string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any = any --->  Array<UserType>

    const addUserCallback = (name: string) => { // need to fix any -->string

        setUsers([...users, {_id: v1(), name: name}]) // need to fix [] --> [...users, {_id:v1(), name:name}]

    }


    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />

            <hr/>
            <button onClick={()=>console.log(users)}>?log Users?</button>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
