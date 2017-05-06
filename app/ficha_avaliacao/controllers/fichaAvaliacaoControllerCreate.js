fichaAvaliacao.controller("fichaAvaliacaoControllerCreate", fichaAvaliacaoControllerCreate);

function fichaAvaliacaoControllerCreate($scope, fichaAvaliacaoService) {
    $scope.fichaAvaliacao = {};

    function save(fichaAvaliacao){
        fichaAvaliacaoService.imc(fichaAvaliacao)
        var promise = fichaAvaliacaoService.save(fichaAvaliacao);
    }
    $scope.imc = fichaAvaliacao.imc;
    $scope.save = save;
}
