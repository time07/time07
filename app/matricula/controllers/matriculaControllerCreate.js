matricula.controller('matriculaControllerCreate', matriculaControllerCreate);

function matriculaControllerCreate() {
	$scope.matricula = {};

    function save(matricula){
        var promise = matriculaService.save(matricula);
        
    }

    $scope.save = save;
}