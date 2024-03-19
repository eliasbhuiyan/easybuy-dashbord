import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducer/userSlice'
import productIDSlice from './reducer/productIdSlice'

export default configureStore({
    reducer: {
        user_sec: userSlice,
        productID: productIDSlice
    },
})