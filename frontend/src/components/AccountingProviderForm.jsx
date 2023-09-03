import { useNavigate } from "react-router-dom"

const AccountingProviderForm = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.accounting_provider.value)
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
