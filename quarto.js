let ladoA = 20;
let ladoB = 20;
let ladoC = 20;

//isosceles = 2 lados iguais e 1 diferente
// escaleno = 3 lados diferentes

if(ladoA == ladoB && ladoB == ladoC){
    console.log("Triangulo Equilatero");
}else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
    console.log("Triangulo Escaleno");
} else {
    console.log("Triangulo Isosceles");
}