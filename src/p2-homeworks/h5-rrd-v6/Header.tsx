import React from 'react'
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {

    return (
        <div className={s.conteiner}>
            <NavLink className={({isActive}) => isActive ? s.linkActive : s.link}
                     to={PATH.PRE_JUNIOR}
            >Pre-Juniorrrr</NavLink>

            <NavLink className={({isActive}) => isActive ? s.linkActive : s.link}
                     to={PATH.JUNIOR}
            >Junior</NavLink>

            <NavLink className={({isActive}) => isActive ? s.linkActive : s.link}
                     to={PATH.JUNIOR_PLUS}
            >Junior +</NavLink>

            <div className={s.block}> </div>
        </div>
    )
}

export default Header
