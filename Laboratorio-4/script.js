// Ejercicio 1
function cuadrados_cubos(num){
    document.write("<h2>Ejercicio 1</h2>");
    document.write("<table>");
    document.write("<tr>");
    document.write("<th> Número </th>");
    document.write("<th> Cuadrado </th>");
    document.write("<th> Cubo </th>");
    document.write("</tr>");

    for(let n = 0; n <= num; n++){
        document.write("<tr>");
        document.write("<td>", n, "</td>");
        document.write("<td>", n**2, "</td>");
        document.write("<td>", n**3, "</td>");
        document.write("</tr>"); 
    }
    document.write("</table>");
}
const num = prompt("Escribe un número entero");
cuadrados_cubos(num);

// Ejercicio 2
function suma_aleatoria(){
    document.write("<h2>Ejercicio 2</h2>");
    const n1 = Math.floor(Math.random()*10);
    const n2 = Math.floor(Math.random()*10);
    const inicio = new Date().getTime();
    const suma = prompt("¿Cuál es el resultado de " + n1 +  "+" + n2 + " ?");
    const final = new Date().getTime();
    const resultado = n1 + n2;
    tiempo = final - inicio;

    if(suma == resultado){
        document.write("<h4>El resultado fue correcto</h4>");
    }
    else{
        document.write("<h4>El resultado fue incorrecto</h4>");
    }
    document.write("<h4>Con un tiempo de: " + tiempo/10000 + " segundos</h4>");
}
suma_aleatoria();

// Ejercicio 3
function contador(cont){
    document.write("<h2>Ejercicio 3</h2>");
    document.write("<h3>El arreglo de números es: [-2, -1, 0, 1, 2, 3]</h3>");
    let negativos = 0;
    let ceros = 0;
    let mayores = 0;

    for(let n = 0; n <=cont.length; n++){
        if(cont[n] < 0){
            negativos++;
        }
        else if(cont[n] == 0){
            ceros++;
        }
        else if(cont[n] > 0){
            mayores++;
        }
    }
    document.write("<h4>La cantidad de números negativos en el arreglo es: " + negativos + "</h4>");
    document.write("<h4>La cantidad de 0's en el arreglo es: " + ceros + "</h4>");
    document.write("<h4>la cantidad de valores mayores a 0 en el arreglo es: " + mayores + "</h4>");
}
const cont = [-2, -1, 0, 1, 2, 3];
contador(cont);

//Ejercicio 4
function promedios(matriz){
    document.write("<h2>Ejercicio 4</h2>");
    document.write("<h3>La matriz es: [[7,3,1], [6,4], [9]]</h3>");

    for(let i = 0; i<= matriz.length-1; i++){
        let promedios = 0;
        for(let j = 0; j<= matriz[i].length-1; j++){
            promedios = promedios + matriz[i][j];
        }
        document.write("<h4>El promedio del renglon es: " + promedios/matriz[i].length + "</h4>");
    }
}
const matriz = [[7,3,1], [6,4], [9]];
promedios(matriz);

//Ejercicio 5
function inverso(numero){
    document.write("<h2>Ejercicio 5</h2>");
    document.write("<h3>El número es: 3006</h3>");
    let inver;

    while(numero >10){
        inver = numero%10;
        document.write(numero%10);
        numero = numero -inver;
        numero = numero/10;
    }
    document.write(numero);
}
let numero = 3006;
inverso("<h4>El número con sus dígitos en orden inverso es: " + numero + "</h4>");