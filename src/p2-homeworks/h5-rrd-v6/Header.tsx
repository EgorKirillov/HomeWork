import React from 'react'
import s from "../h5/Header.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.conteiner}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior +</NavLink>
            <div className={s.block}> </div>
        </div>
    )
}

export default Header
