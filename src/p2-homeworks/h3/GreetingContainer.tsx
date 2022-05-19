import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any --> Array<UserType>
    addUserCallback: (name: string) => void  // need to fix any --> () => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any-->string
    const [error, setError] = useState<string>('') // need to fix any --. variants of errors

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix  --> e.currentTarget.value
    }
    const addUser = () => {
        if (!name.trim()) {
            setError("name reguire")
            setName("")
        } else {
            setError("")
            addUserCallback(name);
            alert(`Hello! ${name}`)
            setName("")
        }
    }

    const totalUsers = users.length// users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
