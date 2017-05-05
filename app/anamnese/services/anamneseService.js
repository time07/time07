anamnese.factory('anamneseService', anamneseService);

function anamneseService(uuid) {

  function getAll() {
    return this.anamneses;
  }

  function save(anamnese) {
   
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
    anamneses : [
      
    ]
  };

}
