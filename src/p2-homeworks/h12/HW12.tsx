import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes: Array<ThemeType> = ['dark', 'red', 'some', "bright"];

function HW12() {
   const theme = useSelector<AppStoreType, ThemeType>((state) => state.theme.theme); // useSelector
   const dispatch = useDispatch()
   // useDispatch, onChangeCallback
   const onchangeHandler = (value: ThemeType) => {
      dispatch(changeThemeC(value))
   }
   
   return (
     <div className={s[theme]}>
        <hr/>
        <span className={s[theme + '-text']}>
                homeworks 12
               <div><SuperSelect options={themes} onChangeOption={onchangeHandler}/></div>
            </span>
        {/*should work (должно работать)*/}
        {/*SuperSelect or SuperRadio*/}
        <hr/>
     </div>
   );
}

export default HW12;
