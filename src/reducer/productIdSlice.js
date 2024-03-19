import { createSlice } from '@reduxjs/toolkit'
function getCookies() {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const cookiesObject = {};

    cookies.forEach((cookie) => {
        const [name, value] = cookie.split("=");
        cookiesObject[name] = value;
    });

    return cookiesObject?.product_short;
}
const cookies = getCookies();
export const productIDSlice = createSlice({
    name: 'productID',
    initialState: {
        product: cookies ? cookies : null,
    },
    reducers: {
        productID: (state, actions) => {
            state.product = actions.payload;
        },
    },
})

export const { productID } = productIDSlice.actions

export default productIDSlice.reducer