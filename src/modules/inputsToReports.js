const inputsToReports = (creditProps) => {
    const creditSum = creditProps.sum.value;
    const period = creditProps.period.value;
    const percent = creditProps.percent.value;

    const monthlyRate = percent / 12 / 100;
    const regularPayment = (creditSum * monthlyRate) / 
    (1 - (1 / Math.pow((1 + monthlyRate), period)))
    const returnSum = regularPayment * period;
    const overPayment = returnSum - creditSum;
    return [
        {id: 1, value: creditSum} , 
        {id: 2, value: returnSum}, 
        {id: 3, value: overPayment}, 
        {id: 4, value: period}, 
        {id: 5, value: percent}, 
        {id: 6, value: regularPayment}
    ]
}

export default inputsToReports