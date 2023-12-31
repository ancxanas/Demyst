import PropTypes from "prop-types"

const BalanceSheet = ({ reviewDetails }) => (
  <div>
    <h3>Balance Sheet</h3>
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Month</th>
          <th>Profit/Loss</th>
          <th>Assets Value</th>
        </tr>
      </thead>
      <tbody>
        {reviewDetails.map((details) => {
          const balanceSheet = details.balance_sheet
          return balanceSheet.map((b) => (
            <tr key={b.month}>
              <td>{b.year}</td>
              <td>{b.month}</td>
              <td>{b.profitOrLoss}</td>
              <td>{b.assetsValue}</td>
            </tr>
          ))
        })}
      </tbody>
    </table>
  </div>
)

BalanceSheet.propTypes = {
  reviewDetails: PropTypes.array.isRequired,
}

export default BalanceSheet
