'use strict'

angular
    .module('reportBlock')
    .component('reportBlock', {
        templateUrl: 'report-block/report-block.template.html',
        bindings: {
            report: '<'
        },
        controller: ['moneyView', 'unitHandler', ReportBlockController]
    })

function ReportBlockController(moneyView, unitHandler) {
    let self = this

    self.$onInit = function() {
    }

    self.$onChanges = function() {
    }

    self.moneyView = function(value) {
        return moneyView.setView(value)
    }

    self.unitHandler = function(value, unit) {
        return unitHandler.setUnit(value, unit)
    }   
}