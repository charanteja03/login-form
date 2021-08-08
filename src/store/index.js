import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers';

export const store = configureStore({
    reducer: { login: loginReducer },
});
