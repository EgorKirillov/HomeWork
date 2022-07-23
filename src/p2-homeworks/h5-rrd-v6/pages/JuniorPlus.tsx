import React from 'react'
import HW12 from "../../h12/HW12";
import s from "../../h12/HW12.module.css"
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {ThemeType} from "../../h12/bll/themeReducer";
import HW13 from '../../h13/HW13';


function JuniorPlus() {
    const theme = useSelector<AppStoreType, ThemeType>((state) => state.theme.theme); // useSelector
    return (
        <div className={s[theme]}>
            <div className={s[theme + '-text']}>
                <h4 className={s[theme + '-text']}>тут скоро будут новые, еще более сложные домашки</h4>
                <HW12/>
                <HW13/>
                {/*<HW14/>*/}
            </div>
        </div>
    )
}

export default JuniorPlus

