import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducer/userSlice'
import productID from './reducer/productIdSlice'

export default configureStore({
    reducer: {
        user_sec: userSlice,
        product_id: productID,
    },
})