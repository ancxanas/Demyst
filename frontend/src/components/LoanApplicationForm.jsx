import { useState } from "react"

const LoanApplicationForm = () => {
  const [businessName, setBusinessName] = useState("")
  const [businessEstablishedYear, setBusinessEstablishedYear] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [businessAddress, setBusinessAddress] = useState("")
  const [businessCity, setBusinessCity] = useState("")
  const [businessState, setBusinessState] = useState("")
  const [businessPhone, setBusinessPhone] = useState("")
  const [businessEmail, setBusinessEmail] = useState("")
  const [loanAmount, setLoanAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(businessName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Business Details</h2>
      <div>
        <input
          required
          placeholder="Business name"
          type="text"
          value={businessName}
          onChange={({ target }) => setBusinessName(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Business Established"
          type="text"
          value={businessEstablishedYear}
          onChange={({ target }) => setBusinessEstablishedYear(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Business Type"
          type="text"
          value={businessType}
          onChange={({ target }) => setBusinessType(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Business Address"
          type="text"
          value={businessAddress}
          onChange={({ target }) => setBusinessAddress(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Business City"
          type="text"
          value={businessCity}
          onChange={({ target }) => setBusinessCity(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Business State"
          type="text"
          value={businessState}
          onChange={({ target }) => setBusinessState(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Business Phone"
          type="tel"
          value={businessPhone}
          onChange={({ target }) => setBusinessPhone(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Business email"
          type="email"
          value={businessEmail}
          onChange={({ target }) => setBusinessEmail(target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="Loan Amount"
          type="number"
          value={loanAmount}
          onChange={({ target }) => setLoanAmount(target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoanApplicationForm
