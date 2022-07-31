import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

const humiditySlice = createSlice({
    name: 'humidity',
    initialState: {
        control: 0.00
    },
    reducers: {
        setHumidity(state, action: PayloadAction<{name:string, value:string}>) {
            
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

export const { setHumidity } = humiditySlice.actions;
export default humiditySlice.reducer;