 let edadJuan= parseInt (prompt("Hola Juan ingresa tu edad: "));
 let edadCarlos= parseInt (prompt("Hola Carlos ingresa tu edad: "));
 let edadAdriana= parseInt (prompt("Hola Adriana ingresa tu edad: "));
 let edadGabriela= parseInt (prompt("Hola Gabriela ingresa tu edad: "));
 let edadPedro= parseInt (prompt("Hola Pedro ingresa tu edad: "));

function promedio (a,b,c,d,e) {
    promedioEdad = (a+b+c+d+e) /5
}

promedio (edadJuan, edadCarlos, edadAdriana, edadGabriela, edadPedro);
let promedioEdad2 = parseInt(promedioEdad);
console.log("El promedio de Edad es de " + promedioEdad2);

if (promedioEdad2 >= 18 & promedioEdad2<=30) {
   console.log("El promedio de Edad esta entre 18 y 30 años");
} else if (promedioEdad2 >= 31 & promedioEdad2<=40) {
    console.log("El promedio de Edad esta entre 31 y 40 años");
} else if (promedioEdad2 >= 41 & promedioEdad2<=50) {
    console.log("El promedio de Edad esta entre 41 y 50 años");
}  else if (promedioEdad2 >= 51 & promedioEdad2<=60) {
    console.log("El promedio de Edad esta entre 51 y 60 años");
} else if (promedioEdad2 >= 61 & promedioEdad2<=70) {
    console.log("El promedio de Edad esta entre 61 y 70 años");
} else if (promedioEdad2 >= 71 & promedioEdad2<=80) {
    console.log("El promedio de Edad esta entre 71 y 80 años");
} else {
    console.log("La edad promedio no esta entre los 18 y los 80 años")
}