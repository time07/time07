modalidade.factory('matriculaService', matriculaService);

function matriculaService(uuid) {
  var matriculas = [];
  var id = 0;  
  console.log($http.get("matricula.json"));

  function getAll() {
    console.log(matriculas);
    return matriculas;
  }

  function save(matricula) {
    matriculas.push(matricula);    
  }

  function remove(id) {
    id = matricula.id;
    for (var matricula in matriculas) {
      if(matriculas[matricula].id === id) {
        matriculas.splice(id, 1);
      }
    }
  }

  function getById(id) {
    var obj;
        for (var matricula in matriculas) {
            if (matriculas[matricula].id === id) {
                obj = matriculas[matricula];
            }
        }
        return obj;
  }

  return {
    remove : remove,
    getAll : getAll,
    save : save,
    getById : getById    
  };

}
