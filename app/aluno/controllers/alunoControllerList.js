aluno.controller("alunoControllerList", alunoControllerList);

function alunoControllerList($scope, alunoService) {
    $scope.aluno = [];
    
    function getAll() {
        $scope.alunos = alunoService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }()

    function onLoadSuccess(data){
        $scope.aluno = data;
    }

    function onLoadError(data){

    }

    getAll();
}