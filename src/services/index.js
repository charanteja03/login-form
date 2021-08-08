import axios from "axios";

export function putUserLogin(loginParams) {
    return axios.put('/login', loginParams)
}