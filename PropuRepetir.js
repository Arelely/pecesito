var cant = 0;
var ar = 1000;

cant = parseFloat(prompt("Ingrese la cantidad de dolares a mostrar"));
while (cant < 1000 || cant > 100000) {
    cant = parseFloat(prompt("Ingrese la cantidad en un rango de 1000-10000"));
}
document.write("_______________________________________________________<br>");
document.write("SALARIO------------------------BTC---------------------ETH<br>");
document.write("_______________________________________________________<br>");

while (ar <= cant) {
    document.write("$"+ar+ "-------------" +ar/57810 + "------------" +ar/3062);
    document.write("<br>");
    document.write("<br>");
    ar++;
}
document.write("_______________________________________________________<br>");



