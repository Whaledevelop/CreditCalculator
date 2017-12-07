'use strict'

angular
    .module('calcBody')
    .component('calcBody', {
        templateUrl: 'calc-body/calc-body.template.html',
        bindings: {
            inputs: '<',
            reports: '<',
            updateValues: '&'
        },
        controller: [
            'Inputs', 'Reports', 'reportsValues', 
            CalcBodyController
        ]
    })

function CalcBodyController(Inputs, Reports, reportsValues) {
    let self = this

    self.inputs = Inputs.query()
    self.reports = Reports.query({}, function(response) {
        setReportValues()
    })

    self.updateValues = function(input, value) {
        input.value = value
        self.reports = setReportValues()
    } 
    
    function setReportValues() {
        const reports = self.reports.map(function(report) {
            const inputsValues = self.inputs.map(function(input) {
                return input.value
            })
            report.value = reportsValues.getValues(inputsValues)[report.id - 1]
            return report
        })
        return reports
    }   
}