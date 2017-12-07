'use strict'

angular
    .module('sliderBlock')
    .component('sliderBlock', {
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
        container: 'container',
        width: 500,
        height: 350
    })
}
