var aluno = angular.module("aluno", []);

aluno.config(configRoutes);

function configRoutes($stateProvider){
     var alunoCreate = {
        name: 'aluno-create',
        url: '/aluno/create',
        controller: 'alunoControllerCreate',
        templateUrl: 'app/aluno/views/alunoForm.html'
    };
    var alunoList = {
        name: 'aluno-list',
        url: '/aluno/list',
        controller: 'alunoControllerList',
        templateUrl: 'app/aluno/views/alunoList.html'
    };
    var alunoEdit = {
        name: 'aluno-edit',
        url: '/aluno/:id/edit',
        controller: 'alunoControllerEdit',
        templateUrl: 'app/aluno/views/alunoForm.html'
    };

    $stateProvider.state(alunoCreate);
    $stateProvider.state(alunoList);
    $stateProvider.state(alunoEdit);
}
