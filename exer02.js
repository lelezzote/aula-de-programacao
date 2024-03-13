function converteParametro(string){
    const numero = Number(string);
    if(isNan(numero)){
        throw new Error("Número inválido");
    }
    return numero;
}
try{
    const operando = string("9090");
    console.log(converteParametro("9090"));
} catch(error){
    console,log("Ocorreu um erro:", error.message)
}