matricula.controller('matriculaControllerCreate', matriculaControllerCreate);

function matriculaControllerCreate($scope, $state, matriculaService) {
	$scope.matricula = {};

   $scope.save = function save(matricula){
        matriculaService.save(matricula);
        $state.go('matricula-list');
    }

     
}