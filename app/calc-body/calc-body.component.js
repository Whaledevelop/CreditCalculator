'use strict'

angular
    .module('calcBody')
    .component('calcBody', {
        templateUrl: 'calc-body/calc-body.template.html',
        controller: ['Inputs', 'Reports', CalcBodyController]
    })

function CalcBodyController(Inputs, Reports) {
    let self = this;
    self.inputs = Inputs.query()
    self.reports = Reports.query({}, function(response) {
        setReportValues()
    })

    function setReportValues() {
        const reports = self.reports.map(function(report) {
            const inputsValues = self.inputs.map(function(input) {
                return input.value
            })
            report.value = reportsValuesFactory(inputsValues)[report.id - 1]
            return report
        })
        return reports
    }

    function reportsValuesFactory(inputsValues) {
        const creditSum = inputsValues[0]
        const creditPeriod = inputsValues[1]
        const percentageRate = inputsValues[2]
        const regularPaymentSum = (creditSum * percentageRate / 12 / 100) / 
        (1 - (1 / Math.pow((1 + percentageRate / 12 / 100), creditPeriod)))
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

    self.updateInputValue = function(input, value) {
        input.value = value
        self.reports = setReportValues()
    }  
}