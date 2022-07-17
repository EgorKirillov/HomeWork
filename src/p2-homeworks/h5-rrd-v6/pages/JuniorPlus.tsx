import React from 'react'
import HW12 from "../../h12/HW12";
import s from "../../h12/HW12.module.css"
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {ThemeType} from "../../h12/bll/themeReducer";


function JuniorPlus() {
   const theme = useSelector<AppStoreType, ThemeType>((state) => state.theme.theme); // useSelector
    return (
        <div className={s[theme]}>
            <h4 className={s[theme + '-text']}>тут скоро будут новые, еще более сложные домашки</h4>
            <HW12/>
            {/*<HW13/>*/}
            {/*<HW14/>*/}

        </div>
    )
}

export default JuniorPlus

