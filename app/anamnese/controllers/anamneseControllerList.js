anamnese.controller("anamneseControllerList", anamneseControllerList);

function anamneseControllerList($scope, anamneseService) {
    $scope.anamneses = [];

    function getAll() {
        $scope.anamneses = anamneseService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }

    function onLoadSuccess(data){
        $scope.anamneses = data;
    }

    function onLoadError(data){

    }

    getAll();
}