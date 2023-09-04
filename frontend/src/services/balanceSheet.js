import axios from "axios"

const baseUrl = "http://localhost:3001/api/balanceSheet"

const getBalanceSheet = async (businessDetails) => {
  const response = await axios.post(baseUrl, businessDetails)
  return response.data
}

export { getBalanceSheet }
