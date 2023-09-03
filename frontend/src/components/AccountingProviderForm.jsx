const AccountingProviderForm = () => {
  return (
    <form>
      <h2>Select an Accounting Provider</h2>
      <div>
        <input type="radio" id="xero" name="accounting_provider" value="xero" />
        <label htmlFor="xero">Xero</label>
      </div>
      <div>
        <input type="radio" id="myob" name="accounting_provider" value="myob" />
        <label htmlFor="myob">MYOB</label>
      </div>
      <button type="submit">Request Balance Sheet</button>
    </form>
  )
}

export default AccountingProviderForm
