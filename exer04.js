function manipulacaoArray(array, indice){
    if(indice < 0 || indice > 0){
    }
    return array[indice];
}
try{
    const operaArray = [1,2,3,4,5,6,7,8];
    console.log("O indice é:")
    console.log(manipulacaoArray(operaArray, 5)); //chama const e function, indicando o indice
}catch(error){
    console.log("Indice não encontrando", error.message);
}