class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }

     verificaMaioridade(){
        if (this.idade >= 18){
            console.log("É maior de idade");
        } else{
        console.log("É menor de idade");
    }
}
converteDias(){
    console.log(this.idade * 365);
}
verificaVelhice(){
    if (this.idade >= 60){
        console.log("É uma pessoa idosa");
    } else{
    console.log("Não é idosa(o)");
}
}
retornaIdade(){
 console.log(this.idade + 1);
}
retornaDespedida(){
    console.log(`Até logo, ${this.nome}.`)
}
saudacaoFormal(){
if (this.idade >= 59){
    console.log(`Olá Sr.(a), ${this.nome}.`);
    } else{
            console.log(`Olá, ${this.nome}.`);
    }
}
}

let pessoa1 = new Pessoa("Leticia", 16);
let pessoa2 = new Pessoa("Julia", 16);

pessoa1.saudacao();
pessoa2.saudacao();

pessoa1.verificaMaioridade();
pessoa2.converteDias();
pessoa1.verificaVelhice();
pessoa2.retornaIdade();
pessoa1.retornaDespedida();
pessoa2.saudacaoFormal();