function verificaNumero(numero1, numero2){ //funçao
    if(numero1 == 0 || numero2 == 0){
        throw new Error("Apenas números maiores do que 0!")
    }
    return numero1/numero2
}

try{
    const numero = verificaNumero(6, 2);
    console.log("O número é:", numero);
}  catch(error){
    console.log("Ocorreu um erro", error.message);
}