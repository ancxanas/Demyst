import { configureStore } from "@reduxjs/toolkit"
import loanReducer from "./reducers/loanReducer"

const store = configureStore({
  reducer: {
    loan: loanReducer,
  },
})

export default store
