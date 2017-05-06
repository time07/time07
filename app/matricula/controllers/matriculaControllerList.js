matricula.controller('matriculaControllerList', matriculaControllerList);

function matriculaControllerList() {
	$scope.matricula = [];

    function getAll() {
        $scope.matricula = matriculaService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }

    function onLoadSuccess(data){
        $scope.matricula = data;
    }

    function onLoadError(data){

    }

    getAll();
}