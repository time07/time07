aluno.factory("alunoService",alunoService);

function alunoService(){
  function getAll() {
    return this.modalidades;
  }

  function save(modalidade) {

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
    modalidades : [

    ]
  };
}
