modalidade.factory('matriculaService', matriculaService);

function modalidadeService(uuid) {

  function getAll() {
    return this.modalidades;
  }

  function save(matricula) {
    
  }

  function remove(id) {
    
  }

  function getById(id) {
   
  }

  return {
    remove : remove,
    getAll : getAll,
    save : save,
    getById : getById,
    matriculas : [
      
    ]
  };

}
