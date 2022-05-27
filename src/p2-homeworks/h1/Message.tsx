import React from 'react'
import s from "./Message.module.css"


type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messagePropsType) {
    // очень долго возился с закруглением, сделал через Жб но сработало, правильно решение смотрел. намного проще, но знаний в верстке не хватает. специально не исправлял
    return (
        <>
            <table className={s.tableMsg}>
                <tbody>
                <tr>
                    <td className={s.avaPosition}>
                        <img className={s.ava} src={props.avatar} alt=''/>
                    </td>
                    <td className={s.d33}>
                        <p className={s.name}><b>{props.name}</b></p>
                        <table>
                            <tbody>
                            <tr>
                                <td className={s.content}>{props.message}</td>
                                <td className={s.timeMsg}>{props.time}</td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </>

    )
}

export default Message
