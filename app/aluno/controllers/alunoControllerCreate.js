app.controller("alunoControllerCreate",alunoControllerCreate);

function alunoControllerCreate($scope,alunoService){
    $scope.aluno= {};

    function save(aluno){
        /*var promise =*/ alunoService.save(aluno);
        alert("ALUNO CADASTRADO COM SUCESSO!");
        console.log(aluno);
    }

    $scope.save = save;
}
