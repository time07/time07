modalidade.controller("modalidadeControllerList", modalidadeControllerList);

function modalidadeControllerList($scope, modalidadeService) {
    $scope.modalidades = [];

    function getAll() {
        $scope.modalidades = modalidadeService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }

    function onLoadSuccess(data){
        $scope.modalidades = data;
    }

    function onLoadError(data){

    }

    getAll();
}