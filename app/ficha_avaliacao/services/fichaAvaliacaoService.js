fichaAvaliacao.factory('fichaAvaliacaoService', fichaAvaliacaoService);

function fichaAvaliacaoService(uuid) {

  function getAll() {
    return this.fichaAvaliacao;
  }

  function save(fichaAvaliacao) {

  }

  function remove(id) {

  }

  function getById(id) {

  }

  function imc(fichaAvaliacao){
    return fichaAvaliacao.peso / (fichaAvaliacao.altura * fichaAvaliacao.altura);
  }

  return {
    remove : remove,
    getAll : getAll,
    save : save,
    getById : getById,
    imc: imc,
    fichaAvaliacao : [

    ]
  };

}
