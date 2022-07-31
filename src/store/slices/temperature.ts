import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

const temperatureSlice = createSlice({
    name: 'temperature',
    initialState: {
        control: 0.00
    },
    reducers: {
        setTemperature(state, action: PayloadAction<{name:string, value:string}>) {
            
            const { name, value } = action.payload;

            // if(name in state) {
            // state = {
            //     ...state,
            //     control: value
            // }


            state.control = Number(value)
            // }
            // else { 

            // }
            // if(state.data[name])
            // state = { 
            //     ...state.data,
            //     state.data[name]: value
            // }
        }
    }
})

export const { setTemperature } = temperatureSlice.actions;
export default temperatureSlice.reducer;