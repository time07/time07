var matricula = angular.module("matricula", []);

matricula.config(configRoutes);

function configRoutes($stateProvider){
	var matriculaCreate = {
		name: 'matricula-create',
		url: '/matricula/create',
		controller: 'matriculaControllerCreate',
		templateUrl: 'app/matricula/views/matriculaForm.html'
	};

	var matriculaEdit = {
		name: 'matricula-edit',
		url: '/matricula/edit',
		controller: 'matriculaControllerEdit',
		templateUrl: 'app/matricula/views/matriculaForm.html'
	};

	var matriculaList = {
		name: 'matricula-list',
		url: '/matricula/list',
		controller: 'matriculaControllerList',
		templateUrl: 'app/matricula/views/matriculaList.html'
	};

	$stateProvider.state(matriculaCreate);
	$stateProvider.state(matriculaList);
	$stateProvider.state(matriculaEdit);
}