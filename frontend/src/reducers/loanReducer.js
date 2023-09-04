import { createSlice } from "@reduxjs/toolkit"
import { getBalanceSheet, getDecision } from "../service"

const loanSlice = createSlice({
  name: "loan",
  initialState: [],
  reducers: {
    appendDetails(state, action) {
      state.push(action.payload)
    },
    appendDecision(state, action) {
      state.push(action.payload)
    },
  },
})

export const { appendDetails, appendDecision } = loanSlice.actions

export const getReviewDetails = (businessDetails) => {
  return async (dispatch) => {
    const reviewDetails = await getBalanceSheet(businessDetails)
    dispatch(appendDetails(reviewDetails))
  }
}

export const getLoanDecision = () => {
  return async (dispatch) => {
    const loanDecision = await getDecision()
    dispatch(appendDecision(loanDecision))
  }
}

export default loanSlice.reducer
