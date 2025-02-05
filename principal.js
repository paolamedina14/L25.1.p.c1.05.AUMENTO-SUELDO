/**
 * AUMENTO SUELDO 
 * En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
 * personal administrativo. La empresa necesita determinar cuánto es el total del monto adicional 
 * que deberá pagar en la próxima quincena. 
 * Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
 * el siguiente formato, informando que
 *  Juan (obrero) actualmente gana $100, Ana (obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) gana $150: 
 * Juan tiene un aumento de $20 
 * Ana tiene un aumento de $24 
 * Lin tiene un aumento de $20 
 * Mary tiene un aumento de $10 
 * Carlos tiene un aumento de $15 
 * El total de monto adicional que debe pagar la empresa es de $89
 */

import Cl_personal from "./Cl_personal.js";
import Cl_empresa from "./Cl_empresa.js";

let personal1 = new Cl_personal("Juan", 1, 100);
let personal2 = new Cl_personal("Ana",  1, 120);
let personal3 = new Cl_personal("Lin",  2, 200);
let personal4 = new Cl_personal("Mary", 1 , 50);
let personal5 = new Cl_personal("Carlos",2, 150);

let empresa = new Cl_empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML = `
${personal1.nombre} tiene un aumento de ${personal1.montoAdicional()}<br>
${personal2.nombre} tiene un aumento de ${personal2.montoAdicional()}<br>
${personal3.nombre} tiene un aumento de ${personal3.montoAdicional()}<br>
${personal4.nombre} tiene un aumento de ${personal4.montoAdicional()}<br>
${personal5.nombre} tiene un aumento de ${personal5.montoAdicional()}<br><br>
El total de monto adicional que debe pagar la empresa es de ${empresa.totalMontoAdicional()}
`
