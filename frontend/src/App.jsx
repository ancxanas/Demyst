import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import AccountingProviderForm from "./components/AccountingProviderForm"
import LoanApplicationForm from "./components/LoanApplicationForm"
import ReviewDetails from "./components/ReviewDetails"
import DecisionDetails from "./components/DecisionDetails"

const App = () => {
  return (
    <div>
      <h1>Loan Application</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business_details" element={<LoanApplicationForm />} />
        <Route path="/balance_sheet" element={<AccountingProviderForm />} />
        <Route path="/review_details" element={<ReviewDetails />} />
        <Route path="/decision_details" element={<DecisionDetails />} />
      </Routes>
    </div>
  )
}

export default App
