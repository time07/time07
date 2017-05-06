aluno.factory("alunoService",alunoService);

function alunoService(){
  function getAll() {
    return this.alunos;
  }

  function save(aluno) {
    
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
    alunos : [

    ]
  };
}
