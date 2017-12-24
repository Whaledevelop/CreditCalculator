const reportsValues = (inputValues) => {
    const creditSum = inputValues[0]
    const creditPeriod = inputValues[1]
    const percentageRate = inputValues[2]
    const monthlyRate = percentageRate / 12 / 100;
    const regularPaymentSum = (creditSum * monthlyRate) / 
    (1 - (1 / Math.pow((1 + monthlyRate), creditPeriod)))
    const returnSum = regularPaymentSum * creditPeriod;
    const overPayment = returnSum - creditSum;
    return [
        creditSum, 
        returnSum, 
        overPayment, 
        creditPeriod, 
        percentageRate, 
        regularPaymentSum
    ]
}

export default reportsValues