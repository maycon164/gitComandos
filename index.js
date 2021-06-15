
const pessoa = {
    nome: "Jean Alexandre",
    idade: 25,
    meApresentar: function() {
        console.log(`Olá eu me chamo ${this.nome} e tenho ${this.idade} anos`)
    }
}

pessoa.apresentar();
pessoa.meApresentar()