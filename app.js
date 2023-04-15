/* se pretende realizar un cotizador de corte laser de platinas, cuadradas, rectangulares y circulares,
en acero inoxidable y acero al carbono.
el precio del corte se calcula multiplicando el perímetro por el precio por metro que depende del espesor y del material
Así mismo se debe pasar el precio del material que depende del peso del material necesario por el precio por kg del material,
con su correspondiente scrap.
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
let Espesor;
let PrecioCorte;
let PrecioMaterial;

alert("Bienvenido al cotizador de platinas por corte laser")

do  {

    Platina = NaN;
    tipoPlatina = NaN;
    continuo = NaN;
    tipoAcero = NaN;
    Acero = NaN;
    LadoCuadrado = NaN;
    Diametro = NaN;
    ladoA = NaN;
    ladoB = NaN;
    textoDim = NaN;
    Espesor = NaN;
    PrecioCorte = NaN;
    PrecioMaterial = NaN;



    tipoPlatina = parseInt(prompt("patina cuadrada ingrese 1 \nplatina rectangular ingrese 2 \nplatina circular ingrese 3"));
    ValidarForma(tipoPlatina);
    TomarDimensiones(tipoPlatina);
    
    tipoAcero = parseInt(prompt("Material: Acero Inoxidable => ingrese: 1 \nMaterial: Acero Carbono => ingrese: 2"));
    ValidarAcero(tipoAcero);
        
    Espesor = Number(prompt("ingrese el espesor de la platina en mm:"));
    ValidarEspor(Espesor, tipoAcero);
    
    Precio(Espesor,tipoPlatina,tipoAcero);

        alert(`ha elegido cotizar una platina ${Platina} de ${Acero}\n
        ${textoDim} de espesor = ${Espesor} mm\n
         el costo unitario de corte es U$D ${PrecioCorte}\n
         el precio unitario de material es U$D ${PrecioMaterial}\n
         consulte descuento por cantidad`);

    continuo = prompt("quiere cotizar otro platina \n s para continuar \n cualquier otro caracter para salir");

} while((continuo == "s") || (continuo == "S") || (continuo == "si") || (continuo == "SI") )