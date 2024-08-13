/*Crear una funcion que imprima los valores de 1000 hasta 100000,en rangos de 1000*/
var inicio = 10000;
var fin = 100000;

function serie1()
{
    for (let index = inicio; index <=fin; index=index+1000) {
        
        document.write(index, "<br>");
    }
}//fin serie1 

//INVERSO
var inicio = 10000; var inicio = 1000000;
var fin = 1000000;

function serie() {
    for (let index = fin; index >=inicio; index = index -1000) {

        document.write(index, "<br>");
    }
}






var dias = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function semanita()
{
    for (let index = 0; index < dias.length; index++) {
        document.write(dias[index],"<br>");
        
    }



}//fin semanita





 
//Crear una funcion que imprima 10 veces una frase 
var texto = "HOLA";
var k = 1; //inicializando
function frase()
{
    while (k<=10)//comprobando
    {
        document.write(texto, "<br>");
        k++;//actualizo
    }//fin while
}