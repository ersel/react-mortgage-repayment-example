import React from 'react';
import calculateMonthlyRepayment from '../utils';

class MortgageCalculator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rate: props.rate,
      years: 10,
      principal: 100000,
    };

    this.calculateRepayment.bind(this);
  }

  handleRateChange(rate) {
    this.setState({ rate });
  }

  handleYearsChange(years) {
    this.setState({ years });
  }

  handlePrincipalChange(principal) {
    this.setState({ principal });
  }

  calculateRepayment() {
    const { rate, years, principal } = this.state;
    const monthlyPayment = calculateMonthlyRepayment(rate, years, principal);
    this.setState({ monthlyPayment });
  }

  render() {
    return (
      <div>
        Interest Rate: <input
          value={this.state.rate}
          onChange={event => this.handleRateChange(event.target.value)}
        /> <br />
        Repayment Period (in years): <input
          value={this.state.years}
          onChange={event => this.handleYearsChange(event.target.value)}
        /> <br />
        Amount to Borrow: <input
          value={this.state.principal}
          onChange={event => this.handlePrincipalChange(event.target.value)}
        /> <br />
        <button onClick={(e) => {
          this.calculateRepayment();
        }}
        >Calculate
        </button>
        <br />
        <span>Monthly Repayment: {this.state.monthlyPayment}</span>
      </div>
    );
  }
}

export default MortgageCalculator;
