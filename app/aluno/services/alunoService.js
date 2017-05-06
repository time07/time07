aluno.factory("alunoService",alunoService);
alunos = [];
function alunoService(uuid){
  function getAll() {
    return this.alunos;
  }

  function save(aluno) {
    alunos.push(aluno);
  }

  function remove(id) {
    for (var index = 0; index < alunos.length; index++) {
      if (alunos[index].id = aluno.id) {
        break;
      }
    }
    for (var y = index; y < alunos.length; y++) {
      alunos[y] = alunos[y+1];      
    }
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
