import { useSelector } from "react-redux"

import BusinessDetails from "./BusinessDetails"
import BalanceSheet from "./BalanceSheet"

const ReviewDetails = () => {
  const reviewDetails = useSelector((state) => state.loan)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("hello")
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
