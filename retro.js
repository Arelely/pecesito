var si, i, d, sf, n, nom, c, des;
var gerente = 0; empleado = 0;
function tabla(si, i, d, sf, n)
{
    document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
    document.write('<table border=1>');
    document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Gerente o Empleado</td><td>Salario inicial</td><td>Descuento Uniforme</td><td>Descuento</td><td>Salario final</td></tr>');
    n = parseInt(prompt("¿Cuanto es la cantidad de empleados que desea ingresar?"));
    for (i = 1; i <= n; i++) {

        nom = prompt('Digite el nombre del obrero número ' + i + '');
        c = prompt("¿Usted es empleado o gerente \n1.Empleado \n2.Gerente");
        if (c == 1)
        {
            c = 'Empleado'
            des = 25;
            empleado++;
        }
        else {
            c = 'Gerente'
            des = 50;
            gerente++;
        }
        si = prompt('Digite el salario inicial del empleado', '');
        
        while(si <=365) {
            si = prompt('Ingrese el salario arriba de 365 ', '');
        }

        d = si * 0.05;
        sf = (si - d)-des;
        document.write('<tr><td>' + i + '</td><td>' + nom + '</td><td>' + c +'</td><td>$' + si + '</td><td>$' + des + '</td><td>$' + d + '</td><td>$' + sf + '</td></tr>');
    }
    document.write('</table>');
    document.write('</table')

    document.write("<br>")
    document.write("La cantidad de gerentes son " + gerente)
    document.write ("<br>")
    document.write("La cantidad de empleados son " + empleado)
}
