angular
.module('core.reports')
.factory('Reports', ['$resource', reportsFactory])

function reportsFactory($resource) {
return $resource('/core/reports/reports.json', {}, {
    query: {
        method: 'GET',
        params: {},
        isArray: true
    }
})
} 