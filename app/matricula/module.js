var matricula = angular.module('matricula', []);

matricula.config(configRoutes);

function configRoutes($stateProvider){
	var matriculaCreate = {
		name: 'matricula-create',
		url: '/matricula/create',
		controller: 'matriculaControllerCreate',
		templateUrl: 'matricula/views/matricula-create.html'
	};

	var matriculaList = {
		name: 'matricula-list',
		url: '/matricula/list',
		controller: 'matriculaControllerList',
		templateUrl: 'matricula/views/matricula-list.html'
	};

	var matriculaEdit = {
		name: 'matricula-edit',
		url: '/matricula/edit',
		controller: 'matriculaControllerEdit',
		templateUrl: 'matricula/views/matricula-edit.html'
	};

	$stateProvider.state(matriculaCreate);
	$stateProvider.state(matriculaList);
	$stateProvider.state(matriculaEdit);

	//$urlRouterProvider.otherwise("/matricula/create");
}