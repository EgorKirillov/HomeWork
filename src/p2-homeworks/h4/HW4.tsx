import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'enter text'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) =>setChecked(e.currentTarget.checked)



    return (

        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                standart input:
                <SuperInputText/>
                + class
                <SuperInputText
                    className={s.blue} // проверьте, рабоtaет ли смешивание классов
                />
                + value, onChangetext - error, onEnter - alert, class span
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    className={s.testClassName}
                    spanClassName={s.testSpanError}
                />


                {/*----------------------------------------------------*/}
                default button
                <SuperButton>
                    default
                </SuperButton>
                default button + click + red
                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    click me {/*// название кнопки попадёт в children*/}
                </SuperButton>
                default button + disabled + red
                <SuperButton red disabled>

                    disabled
                </SuperButton>
                button + className
                <SuperButton className={s.slidingButton}>
                    наведи на меня
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
