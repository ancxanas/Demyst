import { createSlice } from "@reduxjs/toolkit"
import { getBalanceSheet } from "../service"

const loanSlice = createSlice({
  name: "loan",
  initialState: [],
  reducers: {
    appendDetails(state, action) {
      state.push(action.payload)
    },
  },
})

export const { appendDetails } = loanSlice.actions

export const getReviewDetails = (businessDetails) => {
  return async (dispatch) => {
    const reviewDetails = await getBalanceSheet(businessDetails)
    dispatch(appendDetails(reviewDetails))
  }
}

export default loanSlice.reducer
