function alunoModel(){
    this.id = null;
    this.nome = '';
    this.turma = {};
    this.endereco = '';
    this.cep = '';
    this.bairro = '';
    this.cidade = {};
    this.uf = {};
    this.cpf = '';
    this.email = '';
    this.situacaoFinanceira= '';
    this.indentidade= '';
    this.ufIdnetidade = {};
    this.dataNascimento = Date;
    this.sexo = '';
    this.idade = null;
    //dados adicionais
    this.dataValidadeExame = Date;
    this.dataValidadeAvaliação = Date;
    this.objetivo = '';
    this.profissao = '';
    this.empresa = '';
    this.responsavel = '';
    this.estadoCivil = '';
    this.telefoneEmpresa = null;
    this.nomePai = '';
    this.nomeMae = '';
    this.telefoneResponsavel = null;
    this.comoConheceu = '';
    this.restricoesHorario = '';
    this.senha = null;
}

alunoModel.prototype.fromService = function(data){
    //dados principais
    this.id = data.id;
    this.nome = data.nome;
    this.turma = data.turma;
    this.endereco = data.endereco;
    this.cep = date.cep;
    this.bairro = data.bairro;
    this.cidade = data.cidade;
    this.uf = data.uf;
    this.cpf = data.cpf;
    this.email = data.email;
    this.situacaoFinanceira= data.situacaoFinanceira;
    this.indentidade= data.indentidade;
    this.ufIdnetidade = data.ufIdnetidade;
    this.dataNascimento = data.dataNascimento;
    this.sexo = data.sexo;
    this.idade = data.idade;
    //dados adicionais
    this.dataValidadeExame = data.dataValidadeExame;
    this.dataValidadeAvaliação =data.dataValidadeAvaliação;
    this.objetivo = data.objetivo;
    this.profissao = data.profissao;
    this.empresa = data.empresa;
    this.responsavel = data.responsavel;
    this.estadoCivil = data.estadoCivil;
    this.telefoneEmpresa = data.telefoneEmpresa;
    this.nomePai = data.nomePai;
    this.nomeMae = data.nomeMae;
    this.telefoneResponsavel = data.telefoneResponsavel;
    this.comoConheceu = data.comoConheceu;
    this.restricoesHorario = data.restricoesHorario;
    this.senha= data.senha;
}