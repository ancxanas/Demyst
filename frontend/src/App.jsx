import { Routes, Route } from "react-router-dom"

import AccountingProviderForm from "./components/AccountingProviderForm"
import LoanApplicationForm from "./components/LoanApplicationForm"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
      <h1>Loan Application</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business_details" element={<LoanApplicationForm />} />
        <Route path="/balance_sheet" element={<AccountingProviderForm />} />
      </Routes>
    </div>
  )
}

export default App
