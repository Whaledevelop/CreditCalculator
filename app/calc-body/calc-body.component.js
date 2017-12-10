'use strict'

angular
    .module('calcBody')
    .component('calcBody', {
        templateUrl: 'calc-body/calc-body.template.html',
        bindings: {
            inputs: '<',
            reports: '<'
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
        const initialInputsValues = self.inputs.map(function (input) {
            return input.value
        })
        const initialReportsValues = reportsValues.getValues(initialInputsValues)
        const reports = response.map(function (report) {
            report.value = initialReportsValues[report.id - 1]
            return report
        })
        return reports
    })
    
    self.updateValues = function(input, value) {
        input.value = value
        self.reports = setReportValues()
    } 

    $(".valueInput").on('click', function () {
        console.log ('helolo')
    })

    function setReportValues() {
        const inputsValues = self.inputs.map(function (input) {
            return input.value
        })
        const reports = self.reports.map(function (report) {
            report.value = reportsValues.getValues(inputsValues)[report.id - 1]
            return report
        })
        return reports
    }

/*
    self.inputs = Inputs.query()
    self.reports = Reports.query({}, function(response) {
        setReportValues()
    })

    

    function setReportValues() {
        const reports = self.reports.map(function(report) {
            const inputsValues = self.inputs.map(function(input) {
                return input.value
            })
            report.value = reportsValues.getValues(inputsValues)[report.id - 1]
            return report
        })
        return reports
    }   */
}