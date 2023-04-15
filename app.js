/* se pretende realizar un cotizador de corte laser de platinas, cuadradas, rectangulares y circulares,
en acero inoxidable y acero al carbono, con y sin agujeros
el precio del corte se calcula multiplicando el perímetro por el precio por metro que depende del espesor del y del material
Así mismo se debe pasar el precio del material que depende del peso del material necesario por el precio por kg del material
*/


let Platina;
let tipoPlatina;
let continuo;
let tipoAcero;
let Acero;
let LadoCuadrado;
let Diametro;
let ladoA;
let ladoB;
let textoDim;

alert("bienvenido al cotizador de corte laser")

do  {
    tipoPlatina = parseInt(prompt("patina cuadrada ingrese 1 \nplatina rectangular ingrese 2 \nplatina circular ingrese 3"));
    ValidarForma(tipoPlatina);
    console.log(tipoPlatina);
    TomarDimensiones(tipoPlatina);

    tipoAcero = parseInt(prompt("Material: Acero Inoxidable => ingrese: 1 \nMaterial: Acero Carbono => ingrese: 2"));
    ValidarAcero(tipoAcero);   

    
        switch(tipoPlatina) {
            case 1:
                textoDim = (`de lado ${LadoCuadrado} mm`);
                break;
            case 2:
                textoDim = (`de lado A = ${ladoA} mm x lado B = ${ladoB} mm`);
                break;
            case 3:
                textoDim = (`de Diámetro = ${Diametro} mm`);
                break;    
        }

        alert(`ha elegido cotizar una platina ${Platina} de ${Acero}\n${textoDim}`);

    continuo = prompt("quiere cotizar otro platina \n s para continuar \n n para salir");

} while((continuo == "s") || (continuo == "S") || (continuo == "si") || (continuo == "SI") )