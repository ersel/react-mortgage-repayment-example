import React from 'react';

class MortgageCalculator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rate: props.rate,
      years: 10,
      principal: 100000,
    };
    this.handleYearsChange.bind(this);
    this.handlePrincipalChange.bind(this);
    this.calculateRepayment.bind(this);
  }

  handleRateChange(event) {
    this.setState({ rate: event.target.value });
  }

  handleYearsChange(years) {
    this.setState({ years });
  }

  handlePrincipalChange(principal) {
    this.setState({ principal });
  }

  calculateRepayment() {
    const { rate, years, principal } = this.state;
    const principalPaidPerYear = principal / years;
    console.log(principalPaidPerYear, 'principal paid');
    this.setState({ principalPaidPerYear });
  }

  render() {
    return (
      <div>
        Interest Rate: <input
          value={this.state.rate}
          onChange={this.handleRateChange}
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
        <span>This is how much principal you'll pay per year: {this.state.principalPaidPerYear}</span>
      </div>
    );
  }
}

export default MortgageCalculator;
