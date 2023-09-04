const balanceSheet = require("./accountingSoftware")

const profitValue = balanceSheet.reduce(
  (acc, curr) => acc + curr.profitOrLoss,
  0
)

const totalAssetValue = balanceSheet.reduce(
  (acc, curr) => acc + curr.assetsValue,
  0
)

const averageAssetValue = totalAssetValue / balanceSheet.length

const decisionEngine = (loanAmount) => {
  if (averageAssetValue > loanAmount) {
    return 100
  } else if (profitValue > 0) {
    return 60
  } else {
    return 20
  }
}

module.exports = {
  profitValue,
  averageAssetValue,
  decisionEngine,
}
