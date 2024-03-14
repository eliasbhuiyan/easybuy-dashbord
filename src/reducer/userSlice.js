import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode';
const token = document.cookie;
let decoded;

try {
    decoded = jwtDecode(token);
} catch {
    decoded = null;
}
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: decoded || null,
    },
    reducers: {
        loggedUser: (state, actions) => {
            state.user = actions.payload;
        },
    },
})

export const { loggedUser } = userSlice.actions

export default userSlice.reducer