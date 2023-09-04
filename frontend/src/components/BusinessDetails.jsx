import PropTypes from "prop-types"

const BusinessDetails = ({ reviewDetails }) => (
  <div>
    <h3>Business Details</h3>
    <table>
      {reviewDetails.map((details) => {
        const businessDetails = details.business_details[0]
        return (
          <tbody key={businessDetails.business_name}>
            <tr>
              <td>Name</td>
              <td>{businessDetails.business_name}</td>
            </tr>
            <tr>
              <td>Established</td>
              <td>{businessDetails.business_established_year}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{businessDetails.business_address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{businessDetails.business_city}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{businessDetails.business_state}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{businessDetails.business_type}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{businessDetails.business_phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{businessDetails.business_email}</td>
            </tr>
            <tr>
              <td>Loan Amount</td>
              <td>{businessDetails.loan_amount}</td>
            </tr>
          </tbody>
        )
      })}
    </table>
  </div>
)

BusinessDetails.propTypes = {
  reviewDetails: PropTypes.array.isRequired,
}

export default BusinessDetails
