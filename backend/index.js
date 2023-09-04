const express = require("express")
const cors = require("cors")

const app = express()

const balanceSheet = require("./accountingSoftware")
const profitValue = require("./decisionEngine").profitValue
const decisionEngine = require("./decisionEngine").decisionEngine

app.use(cors())
app.use(express.json())

const businessDetails = []

app.post("/api/balanceSheet", (req, res) => {
  businessDetails.push(req.body)
  res.status(201).json({
    balance_sheet: balanceSheet,
    business_details: businessDetails,
  })
})

app.get("/api/decision", (_req, res) => {
  const profit = profitValue

  res.status(200).json({
    businessName: businessDetails[0].business_name,
    yearEstablished: businessDetails[0].business_established_year,
    profit,
    preAssessment: decisionEngine(businessDetails[0].loan_amount),
  })
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
