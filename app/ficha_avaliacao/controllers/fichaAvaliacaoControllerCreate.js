modalidade.controller("modalidadeControllerCreate", modalidadeControllerCreate);

function modalidadeControllerCreate($scope, modalidadeService) {
    $scope.modalidade = {};

    function save(modalidade){
        var promise = modalidadeService.save(modalidade);
    }

    $scope.save = save;
}