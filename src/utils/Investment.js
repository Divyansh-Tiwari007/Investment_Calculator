export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let j = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    const initialInvestment =
      investmentValue - interestEarnedInYear - annualInvestment;

    const totalInterest = investmentValue - annualInvestment * (i + 1) - j;

    const totalAmountInvested = investmentValue - totalInterest;

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      totalInterest: totalInterest, // total interest earned
      totalAmountInvested: totalAmountInvested,
    });
  }

  for (let i = 0; i < annualData.length; i++) {}
  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
