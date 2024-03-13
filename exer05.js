function manipulaDom(element){
    if(element){
        throw new Error("Esse elemento não existe ;)");
    }
    return element;
} try{
    const texto = manipulaDom("O texto não existe");
    console.log(manipulaDom.inexistente);
}catch(error){
    console.log("", error.message);
}