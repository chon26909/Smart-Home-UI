import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const curcuitSlice = createSlice({
    name: 'curcuit',
    initialState: {
        curcuit1: { 
            voltage: 0.00
        },
        curcuit2: { 
            voltage: 0.00
        },
    },
    reducers: {
        setCurcuit(state: any, action: PayloadAction<{ position: string, name:string, value:string}>) {
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

export const { setCurcuit } = curcuitSlice.actions;
export default curcuitSlice.reducer;