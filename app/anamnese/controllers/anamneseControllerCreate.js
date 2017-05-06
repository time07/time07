anamnese.controller("anamneseControllerCreate", anamneseControllerCreate);

function anamneseControllerCreate($scope,$state, anamneseService) {
    $scope.anamnese = {};
    $scope.save = save;

    function save(anamnese){
        anamneseService.save(anamnese);
        $state.go('anamnese-list');
    }

}