import { useSelector } from "react-redux"

const DecisionDetails = () => {
  const loan = useSelector((state) => state.loan)

  if (!loan[1]) return null

  return (
    <div>
      <h2>Decision Details</h2>
      <p>Business Name: {loan[1].businessName}</p>
      <p>Year Established: {loan[1].yearEstablished}</p>
      <p>Profit: {loan[1].profit}</p>
      <p>Pre-assessment: {loan[1].preAssessment}</p>
    </div>
  )
}

export default DecisionDetails
