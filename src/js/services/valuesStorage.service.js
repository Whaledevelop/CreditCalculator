'use strict'

angular
    .module('valuesStorage', [])
    .service('valuesStorage', valuesStorageService)

function valuesStorageService(){
    let _values = [];
    return {
        setValues: function(values) {
            _values = values
        },
        getValues: function() {
            return _values
        }
    }
}