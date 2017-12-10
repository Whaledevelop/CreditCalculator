'use strict'

angular
    .module('calcBody')
    .component('calcBody', {
        templateUrl: 'calc-body/calc-body.template.html',
        controller: [
            'Inputs', 'Reports', 'reportsValues',
            CalcBodyController
        ]
    })

function CalcBodyController(Inputs, Reports, reportsValues) {
    let self = this

    self.inputs = Inputs.query()
    self.reports = Reports.query({}, function(response) {
        self.reports = setReportValues()
    })
    self.stage = new Konva.Stage({
        container: "konvaStage",
        width: 500,
        height: 300
    })

    self.updateValues = function(input, value) {
        input.value = value
        self.reports = setReportValues()
    } 

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
}