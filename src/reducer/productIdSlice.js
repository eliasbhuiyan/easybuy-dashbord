import { createSlice } from '@reduxjs/toolkit'
// import { jwtDecode } from 'jwt-decode';

// const token = document.cookie;
// let decoded;

// try {
//     decoded = jwtDecode(token);
// } catch {
//     decoded = null;
// }
export const productIDSlice = createSlice({
    name: 'productID',
    initialState: {
        product_id: null,
    },
    reducers: {
        productID: (state, actions) => {
            state.product_id = actions.payload;
        },
    },
})

export const { productID } = productIDSlice.actions

export default productIDSlice.reducer