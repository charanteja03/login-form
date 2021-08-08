import {
    FETCHING_LOGIN_DETAILS,
    USER_LOGGED_IN,
    USER_LOGIN_ERROR,
} from '../actions';

const intialState = {
    isLoggedIn: false,
    username: null,
    userDetails: {},
    error: null,
    loading: false
}

const Reducer = (state=intialState, { type, payload }) => {
    switch (type) {
        case FETCHING_LOGIN_DETAILS: {
            return {
                isLoggedIn: false,
                userDetails: {},
                loading: true,
                error: null,
            }
        }
        case USER_LOGGED_IN: {
            return {
                isLoggedIn: true,
                userDetails: payload,
                loading: false,
                error: null,
            }
        }
        case USER_LOGIN_ERROR: {
            return {
                isLoggedIn: false,
                userDetails: {},
                loading: false,
                error: payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default Reducer;
