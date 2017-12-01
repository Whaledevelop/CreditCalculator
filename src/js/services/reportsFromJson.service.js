'use strict'

angular
    .module('reportsFromJson', [])
    .factory('ReportsFromJson', reportsFactory)

function reportsFactory($resource) {
    const url = '/json/reports.json'
    return $resource(url, {}, {
        get: {
            method: "GET",
            isArray: true,
            cache: true
        }
    })
}