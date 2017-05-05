app.controller("alunoCreate",alunoCreate)

function alunoCreate($scope,alunoService){
    $scope.aluno= {};
    $scope.saveAluno(aluno){
        alunoService.saveAluno(aluno);
    }
    
}