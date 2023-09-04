import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getReviewDetails } from "../reducers/loanReducer"

const AccountingProviderForm = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const businessName = sessionStorage.getItem("businessName")
    const businessEstablishedYear = sessionStorage.getItem(
      "businessEstablishedYear"
    )
    const businessType = sessionStorage.getItem("businessType")
    const businessAddress = sessionStorage.getItem("businessAddress")
    const businessCity = sessionStorage.getItem("businessCity")
    const businessState = sessionStorage.getItem("businessState")
    const businessPhone = sessionStorage.getItem("businessPhone")
    const businessEmail = sessionStorage.getItem("businessEmail")
    const loanAmount = sessionStorage.getItem("loanAmount")
    const accountingProvider = e.target.accounting_provider.value

    const businessDetails = {
      business_name: businessName,
      business_type: businessType,
      business_established_year: businessEstablishedYear,
      business_address: businessAddress,
      business_city: businessCity,
      business_state: businessState,
      business_phone: businessPhone,
      business_email: businessEmail,
      loan_amount: loanAmount,
      accounting_provider: accountingProvider,
    }

    dispatch(getReviewDetails(businessDetails))

    navigate("/review_details")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select an Accounting Provider</h2>
      <div>
        <label>
          <input
            type="radio"
            name="accounting_provider"
            value="Xero"
            defaultChecked
          />
          Xero
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="accounting_provider" value="MYOB" />
          MYOB
        </label>
      </div>
      <button onClick={() => navigate("/business_details")}>Back</button>
      <button type="submit">Request Balance Sheet</button>
    </form>
  )
}

export default AccountingProviderForm
