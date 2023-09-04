import axios from "axios"

const baseUrl = "http://localhost:3001/api"

const getBalanceSheet = async (businessDetails) => {
  const response = await axios.post(`${baseUrl}/balanceSheet`, businessDetails)
  return response.data
}

const getDecision = async () => {
  const response = await axios.get(`${baseUrl}/decision`)
  return response.data
}

export { getBalanceSheet, getDecision }
