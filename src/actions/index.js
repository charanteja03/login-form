export const FETCHING_LOGIN_DETAILS = 'FETCHING_LOGIN_DETAILS';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export function setFetchingLoginDetails() {
    return {
        type: FETCHING_LOGIN_DETAILS,
    }
}

export function setUserLoggedIn(payload) {
    return {
        type: USER_LOGGED_IN,
        payload,
    }
}

export function setUserLoginError(payload) {
    return {
        type: USER_LOGIN_ERROR,
        payload,
    }
}
