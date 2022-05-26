import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"


function Header() {

    return (
                <div className={s.conteiner}>
                    <NavLink className={s.link} to="/preJunior">Pre-Junior</NavLink>
                    <NavLink className={s.link} to="/Junior">Junior</NavLink>
                    <NavLink className={s.link} to="/Junior+">Junior +</NavLink>
                    <div className={s.block}></div>
                </div>
    )
}

export default Header
