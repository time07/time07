function AnamneseModel(){
    this.id = null;
    this.nome = '';
    this.valor = null;
}

AnamneseModel.prototype.fromService = function(data){
    this.id = data.id;
    this.nome = data.nome;
    this.valor = data.valor;
}