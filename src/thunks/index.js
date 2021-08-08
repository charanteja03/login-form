import {
    setFetchingLoginDetails,
    setUserLoggedIn,
    setUserLoginError,
} from '../actions';
import { putUserLogin } from '../services';

export function loginUser(loginParams) {
    return (dispatch) => {
        dispatch(setFetchingLoginDetails());
        setTimeout(() => {
            putUserLogin(loginParams).then(response => {
                console.log('came')
                dispatch(setUserLoggedIn(response.data));
            }).catch(error => {
                console.log('error', error)
                dispatch(setUserLoginError(error.message));
            })
        }, 3000);
    }
}

export function setInputParamsError(errorMessage) {
    return (dispatch) => {
        dispatch(setUserLoginError(errorMessage));
    }
}
