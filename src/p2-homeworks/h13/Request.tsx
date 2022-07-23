import React, {useState} from 'react';
import {requestAPI} from "./RequestAPI";

const Request = () => {
    const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)
    const [response, setResponse] = useState("сделай запрос")
    
    const onClickHandler = () => {
        requestAPI.postRequest(valueCheckbox)
            .then((res) => {
                console.log(res)
                setResponse(`${res.data.errorText}, ${res.data.info}`)
            }).catch((error) => {
            console.log(error)
                setResponse(error.response ? `${error.response.data.errorText}, ${error.response.data.info}` : error.message)
            }
        )
    }
    const onCheckedHandler = () => {
        setValueCheckbox(!valueCheckbox)
        setResponse("сделай запрос")
    }
    
    return (
        <div>
            <button onClick={onClickHandler}>button</button>
            <input type="checkbox" checked={valueCheckbox}
                   onChange={onCheckedHandler}/> check {String(valueCheckbox)}
            <div>{`Request:   {success: ${String(valueCheckbox)} } `}</div>
            <div>{`Response: ${response}`}</div>
        </div>
    );
};

export default Request;