import axios from 'axios'

export const requestAPI = {
    
    postRequest(valueCheckbox: boolean) {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: valueCheckbox})
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    }
}