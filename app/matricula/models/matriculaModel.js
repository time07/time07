function MatriculaModel(){
    this.id = null;
    this.aluno = null;
    this.modalidade = null;
    this.planoPagamento = null;
    this.dataInicio = null;
    this.dataVencimento = null;
    this.tipoDesconto = null;
    this.valorDesconto = null;
    this.valorFinal = null;
}

MatriculaModel.prototype.fromService = function(data){
    this.id = data.id;
    this.aluno = data.aluno;
    this.modalidade = data.modalidade;
    this.planoPagamento = data.planoPagamento;
    this.dataInicio = data.dataInicio;
    this.dataVencimento = data.dataVencimento;
    this.tipoDesconto = data.tipoDesconto;
    this.valorDesconto = data.valorDesconto;
    this.valorFinal = data.valorFinal;
}