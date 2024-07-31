import {combineReducers, configureStore} from '@reduxjs/toolkit'

import {countriesApi} from '../api/countries-api'
import {appReducer} from "../reduser/app/app.reducer";
import {useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    app:appReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
})

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countriesApi.middleware),
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
