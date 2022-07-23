import React, {useState} from 'react';
import {requestAPI} from "./RequestAPI";

const Request = () => {
    const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)
    const [response, setResponse] = useState("сделай запрос")
    
    const onClickHandler = () => {
        requestAPI.postRequest(valueCheckbox)
            .then(response => setResponse(`${response.data.errorText}, ${response.data.info}`))
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