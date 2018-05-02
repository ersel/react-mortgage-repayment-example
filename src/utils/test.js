import calculateMonthRepayment from './';

describe('monthly repayment calculator', () => {
  it('should calculate monthly repayments', () => {
    const monthlyPayment = calculateMonthRepayment(5, 10, 100000);
    expect(monthlyPayment).toBe(1061);
  });
});
