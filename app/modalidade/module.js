var modalidade = angular.module("modalidade", []);

modalidade.config(configRoutes);

function configRoutes($stateProvider){
     var modalidadeCreate = {
        name: 'modalidade-create',
        url: '/modalidade/create',
        controller: 'modalidadeControllerCreate',
        templateUrl: 'app/modalidade/modalidadeForm.html'
    };
    var modalidadeList = {
        name: 'modalidade-list',
        url: '/modalidade/list',
        controller: 'modalidadeControllerList',
        templateUrl: 'app/modalidade/modalidadeList.html'
    };
    var modalidadeEdit = {  
        name: 'modalidade-edit',
        url: '/modalidade/:id/edit',
        controller: 'modalidadeControllerEdit',
        templateUrl: 'app/modalidade/modalidadeForm.html'
    };

    $stateProvider.state(modalidadeCreate);
    $stateProvider.state(modalidadeList);
    $stateProvider.state(modalidadeEdit);
}