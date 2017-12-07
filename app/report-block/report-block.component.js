'use strict'

angular
    .module('reportBlock')
    .component('reportBlock', {
        templateUrl: 'report-block/report-block.template.html',
        bindings: {
            report: '<'
        },
        controller: ReportBlockController
    })

function ReportBlockController() {
    
}