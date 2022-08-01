import { configureStore } from '@reduxjs/toolkit';
import humidity from './slices/humidity';
import sidebar from './slices/sidebar';
import temperature from './slices/temperature';
import battery from './slices/battery';
import regulator from './slices/regulator';

const reducers = { 
    temperature: temperature,
    humidity: humidity,
    sidebar: sidebar,
    battery: battery,
    regulator: regulator
}

const store = configureStore({
    reducer: reducers,
    devTools: true
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;