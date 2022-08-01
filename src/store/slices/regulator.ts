import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const regulatorSlice = createSlice({
    name: 'regulator',
    initialState: {
        regulator1: { 
            voltage: 0.00
        },
        regulator2: { 
            voltage: 0.00
        },
    },
    reducers: {
        setRegulator(state: any, action: PayloadAction<{ position: string, name:string, value:string}>) {
            const { position, name, value } = action.payload;

            return state = { 
                ...state, 
                [position]: {
                    ...state[position], 
                    [name]: Number(value)
                }
            }
        }
    }
})

export const { setRegulator } = regulatorSlice.actions;
export default regulatorSlice.reducer;