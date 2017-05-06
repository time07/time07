aluno.controller("alunoControllerList", alunoControllerList);

function alunoControllerList($scope, alunoService) {
    $scope.aluno = [];
    $scope.alunos = getAll();
     
    $scope.getall = 
    function getAll() {
        return alunoService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }()

    $scope.onLoadSuccess = 
    function onLoadSuccess(data){
        $scope.aluno = data;
    }

    
    function onLoadError(data){

    }

    getAll();
}