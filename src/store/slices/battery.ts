import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const batterySlice = createSlice({
    name: 'battery',
    initialState: { 
        count: 1,
        voltage: 0.00,
        current: 0.00
    },
    reducers: { 
        setBattery(state: any, action: PayloadAction<{name: string, value: string }>) { 
            
            const {name, value } = action.payload;   
                
            if (name === 'voltage') {
                return state = { 
                    ...state,
                    voltage: Number(value)
                }
            }
            else if (name === 'current') {
                return state = { 
                    ...state,
                    current: Math.abs(Number(value)) 
                }
            }
        } 
    }
});

export const { setBattery } = batterySlice.actions;
export default batterySlice.reducer;