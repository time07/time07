anamnese.controller("anamneseControllerList", anamneseControllerList);

function anamneseControllerList($scope, anamneseService , $state) {
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
      $scope.confirmarExclusao = function(id) {
    if (confirm("Deseja excluir o livro?")) {
      anamneseService.remove(id);
      $state.reload();
    }
  }

  $scope.entrarModoEdicao = function(id) {
    //Passando o parâmetro id recebido para o atributo id que será incluído no $stateParams.
    $state.go('anamnese-edit', {id: id});
}
    getAll();
}