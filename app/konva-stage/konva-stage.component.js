'use strict'

angular
    .module('konvaStage')
    .component('konvaStage', {
        templateUrl: 'konva-stage/konva-stage.template.html',
        bindings: {
            inputs: '<',
            onChange: '&'
        },
        controller: KonvaStageController
    })

function KonvaStageController() {
    let self = this
    self.stage = new Konva.Stage ({
        container: 'konvaStage',
        width: 500,
        height: 400
    })

    self.updateValues = function (input, value) {
        self.onChange({
            input: input,
            value: value
        })
    }
}
