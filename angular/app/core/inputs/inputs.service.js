angular
    .module('core.inputs')
    .factory('Inputs', ['$resource', inputsFactory])

function inputsFactory($resource) {
    return $resource('/core/inputs/inputs.json', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
} 