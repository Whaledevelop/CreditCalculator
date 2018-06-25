const inputsToReports = (inputs) => {
    const correctReport = ({value, min, max}) => {
        return value < min ? min 
            : value > max ? max 
            : value 
    }
    const creditSum = correctReport(inputs[0])
    const period = correctReport(inputs[1])
    const percent = correctReport(inputs[2])

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