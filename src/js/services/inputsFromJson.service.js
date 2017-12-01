'use strict'

angular
    .module('inputsFromJson', [])
    .factory('InputsFromJson', inputsFactory)

function inputsFactory($resource) {
    const url = '/json/inputs.json'
    return $resource(url, {}, {
        get: {
            method: "GET",
            isArray: true,
            cache: true
        }
    })
}