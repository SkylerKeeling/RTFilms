const convertToCanadianDollar = (amount, conversionRate = 1.7) => {
  const numericAmount = parseFloat(amount)

  if (isNaN(numericAmount)) {
    return "Invalid amount"
  }

  const canadianDollarAmount = numericAmount * conversionRate
  return canadianDollarAmount.toFixed(2)
}

export default convertToCanadianDollar
