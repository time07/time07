anamnese.factory('anamneseService', anamneseService);

function anamneseService(uuid) {
  var listaAnamnese = [];

  function getAll() {
    return listaAnamnese;
  }

  function save(anamnese) {
    listaAnamnese.push(anamnese);
  }

  function remove(id) {
   listaAnamnese = listaAnamnese.filter(auxiliar => auxiliar.id !== id);
  }

  function getById(id) {
    return listaAnamnese.filter (auxiliar => auxiliar.id == id)[0];
   
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
