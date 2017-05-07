matricula.controller('matriculaControllerList', matriculaControllerList);

function matriculaControllerList($scope, matriculaService) {
	$scope.matricula = [];

    function getAll() {
        $scope.listMatricula = matriculaService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }

    $scope.confirmarExclusao = function Excluir(id){
        matriculaService.remove(id);
        alert("Excluído com sucesso.");
    }

    function onLoadSuccess(data){
        $scope.matricula = data;
    }

    function onLoadError(data){

    }

    getAll();
}