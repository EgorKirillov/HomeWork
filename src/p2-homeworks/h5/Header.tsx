import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"


function Header() {

    const [display, setDisplay] = useState("none")

    const conteiner = {
        display: `${display}`,
        animation: '2.5s forwards',
        color: "cornflowerblue",
        // ':hover': {
        //     backgroundColor: 'green',
        // }
    }

    const navStyle = {
        marginLeft: "1em",
        color: "cornflowerblue",
    }

    const openlinks = {
        marginLeft: "1em",
        width: "0.8em",
        height: "0.8em",
        backgroundColor: "cornflowerblue",
        display: "inline-block",
    }

    const onMouseEnterHandler = () => {
        setDisplay("inline-block")
    }
    const onMouseLeaveHendler = () => {
        setDisplay("none")
    }

    // div:hover > .conteiner,
    //     div:focus-within > .conteiner
    // {
    //     display: inline-block;
    //
    // }


    return (
        <>
            <div style={{float: "left"}} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHendler}>
                <div style={conteiner}>
                    <NavLink
                        style={navStyle}                //{isActive => "navLinkClass" + (!isActive ? " navLinkClass" : "")}
                        to="/preJunior">
                        Pre-Junior
                    </NavLink>
                    <NavLink style={navStyle} to="/Junior">Junior</NavLink>
                    <NavLink style={navStyle} to="/Junior+">Junior +</NavLink>

                </div>
                <div style={openlinks}>  </div>
            </div>

            // add NavLinks


        </>
    )
}

export default Header
