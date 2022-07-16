import { configureStore } from '@reduxjs/toolkit';
import humidity from './slices/humidity';
import temperature from './slices/temperature';

const reducers = { 
    temperature: temperature,
    humidity: humidity
}

const store = configureStore({
    reducer: reducers,
    devTools: true
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;