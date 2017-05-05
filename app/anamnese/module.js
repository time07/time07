var anamnese = angular.module("anamnese", []);

anamnese.config(configRoutes);

function configRoutes($stateProvider){
     var anamneseCreate = {
        name: 'anamnese-create',
        url: '/anamnese/create',
        controller: 'anamneseControllerCreate',
        templateUrl: 'app/anamnese/views/anamneseForm.html'
    };
    var anamneseList = {
        name: 'anamnese-list',
        url: '/anamnese/list',
        controller: 'anamneseControllerList',
        templateUrl: 'app/anamnese/views/anamneseList.html'
    };
    var anamneseEdit = {  
        name: 'anamnese-edit',
        url: '/anamnese/:id/edit',
        controller: 'anamneseControllerEdit',
        templateUrl: 'app/anamnese/views/anamneseForm.html'
    };

    $stateProvider.state(anamneseCreate);
    $stateProvider.state(anamneseList);
    $stateProvider.state(anamneseEdit);
}