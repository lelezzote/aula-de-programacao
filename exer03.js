function operacaoNumero(expressao1, expressao2){
    const operando = (expressao1/expressao2);
    if(operando){

    }
  return expressao1/expressao2;
} try{
    const resultado = operacaoNumero("9/3");
    console.log("Resultado:");
} catch(error){
      console.log("Não é possível realizar a operação!", error.message);
}