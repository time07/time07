anamnese.controller("anamneseControllerCreate", anamneseControllerCreate);

function anamneseControllerCreate($scope, anamneseService) {
    $scope.anamnese = {};

    function save(anamnese){
        var promise = anamneseService.save(anamnese);
    }

    $scope.save = save;
}