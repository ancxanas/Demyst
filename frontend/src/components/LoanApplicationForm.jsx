import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const LoanApplicationForm = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (
      sessionStorage.getItem("businessName") ||
      sessionStorage.getItem("businessEstablishedYear") ||
      sessionStorage.getItem("businessType") ||
      sessionStorage.getItem("businessAddress") ||
      sessionStorage.getItem("businessCity") ||
      sessionStorage.getItem("businessState") ||
      sessionStorage.getItem("businessPhone") ||
      sessionStorage.getItem("businessEmail") ||
      sessionStorage.getItem("loanAmount")
    ) {
      setBusinessName(sessionStorage.getItem("businessName"))
      setBusinessEstablishedYear(
        sessionStorage.getItem("businessEstablishedYear")
      )
      setBusinessType(sessionStorage.getItem("businessType"))
      setBusinessAddress(sessionStorage.getItem("businessAddress"))
      setBusinessCity(sessionStorage.getItem("businessCity"))
      setBusinessState(sessionStorage.getItem("businessState"))
      setBusinessPhone(sessionStorage.getItem("businessPhone"))
      setBusinessEmail(sessionStorage.getItem("businessEmail"))
      setLoanAmount(sessionStorage.getItem("loanAmount"))
    }
  }, [])

  const [businessName, setBusinessName] = useState("")
  const [businessEstablishedYear, setBusinessEstablishedYear] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [businessAddress, setBusinessAddress] = useState("")
  const [businessCity, setBusinessCity] = useState("")
  const [businessState, setBusinessState] = useState("")
  const [businessPhone, setBusinessPhone] = useState("")
  const [businessEmail, setBusinessEmail] = useState("")
  const [loanAmount, setLoanAmount] = useState("")

  const handleBack = () => {
    sessionStorage.setItem("businessName", businessName)
    sessionStorage.setItem("businessEstablishedYear", businessEstablishedYear)
    sessionStorage.setItem("businessType", businessType)
    sessionStorage.setItem("businessAddress", businessAddress)
    sessionStorage.setItem("businessCity", businessCity)
    sessionStorage.setItem("businessState", businessState)
    sessionStorage.setItem("businessPhone", businessPhone)
    sessionStorage.setItem("businessEmail", businessEmail)
    sessionStorage.setItem("loanAmount", loanAmount)

    navigate("/")
  }

  const handleNext = (e) => {
    e.preventDefault()

    sessionStorage.setItem("businessName", businessName)
    sessionStorage.setItem("businessEstablishedYear", businessEstablishedYear)
    sessionStorage.setItem("businessType", businessType)
    sessionStorage.setItem("businessAddress", businessAddress)
    sessionStorage.setItem("businessCity", businessCity)
    sessionStorage.setItem("businessState", businessState)
    sessionStorage.setItem("businessPhone", businessPhone)
    sessionStorage.setItem("businessEmail", businessEmail)
    sessionStorage.setItem("loanAmount", loanAmount)

    navigate("/balance_sheet")
  }

  return (
    <form onSubmit={handleNext}>
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
      <button onClick={handleBack}>Back</button>
      <button type="submit">Next</button>
    </form>
  )
}

export default LoanApplicationForm
