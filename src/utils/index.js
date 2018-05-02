const calculateMonthlyRepayment = (rate, years, principal) => {
  const numberOfPayments = years * 12;
  const numerator = rate * ((Math.pow(1 + rate), numberOfPayments)); //eslint-disable-line
  const denominator = (Math.pow((1 + rate), numberOfPayments)) - 1; //eslint-disable-line
  return principal * (numerator / denominator);
};

export default calculateMonthlyRepayment;
