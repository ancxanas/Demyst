import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import BusinessDetails from "./BusinessDetails"
import BalanceSheet from "./BalanceSheet"
import { getLoanDecision } from "../reducers/loanReducer"

const ReviewDetails = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const reviewDetails = useSelector((state) => state.loan)

  if (!reviewDetails) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(getLoanDecision())

    navigate("/decision_details")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review Details</h2>
      <BusinessDetails reviewDetails={reviewDetails} />
      <BalanceSheet reviewDetails={reviewDetails} />
      <button type="submit">Submit Application</button>
    </form>
  )
}

export default ReviewDetails
