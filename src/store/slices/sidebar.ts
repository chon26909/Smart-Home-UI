import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const humiditySlice = createSlice({
    name: 'sidebar',
    initialState: {
        isActive: false
    },
    reducers: {
        toggleSidebar(state) {
            return state = {
                ...state,
                isActive: !state.isActive
            }
        }
    }
})

export const { toggleSidebar } = humiditySlice.actions;
export default humiditySlice.reducer;