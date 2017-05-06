fichaAvaliacao.controller("fichaAvaliacaoControllerList", fichaAvaliacaoControllerList);

function fichaAvaliacaoControllerList($scope, fichaAvaliacaoService) {
    $scope.fichaAvaliacao = [];

    function getAll() {
        $scope.fichasAvaliacoes = fichaAvaliacaoService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }

    function onLoadSuccess(data){
        $scope.fichasAvaliacoes = data;
    }

    function onLoadError(data){

    }

    getAll();
}
