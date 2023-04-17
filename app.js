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
PrecioCorte = NaN;
PrecioMaterial = NaN;
let item = 0;
let cantidad = NaN;
let total = 0;
let carrito = '';
let parcial = 0;
let IVAuru = 0.22;
let totalN = NaN;     /*Variable normalizada a 2 digitos */
let parcialN = NaN;   /*Variable normalizada a 2 digitos */

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


    



    tipoPlatina = parseInt(prompt("patina cuadrada ingrese 1 \nplatina rectangular ingrese 2 \nplatina circular ingrese 3"));
    ValidarForma(tipoPlatina);
    TomarDimensiones(tipoPlatina);
    
    tipoAcero = parseInt(prompt("Material: Acero Inoxidable => ingrese: 1 \nMaterial: Acero Carbono => ingrese: 2"));
    ValidarAcero(tipoAcero);
        
    Espesor = Number(prompt("ingrese el espesor de la platina en mm:"));
    ValidarEspor(Espesor, tipoAcero);
    
    Precio(Espesor,tipoPlatina,tipoAcero);

        cantidad = (prompt(`ha elegido cotizar una platina ${Platina} con ${Acero}\n${textoDim} de espesor = ${Espesor} mm\nel precio unitario de corte es: U$D ${PrecioCorte}\nel precio unitario de material es: U$D ${PrecioMaterial}\nintrotuzca la cantidad que quiere agragar a su carrito (0 para niniguna)`));
        
        ValidarCantidad(cantidad);
        
        if(cantidad != 0) {
            item = item + 1;
            unitario = Number(PrecioCorte) + Number(PrecioMaterial);
            unitarioN = (unitario).toFixed(2)
            parcial = unitario * cantidad;
            total = total + parcial;
            parcialN = (parcial).toFixed(2);
            totalN = (total).toFixed(2);
            carrito = carrito + `item ${item}.- platina ${Platina} de ${Acero} ${textoDim} espesor ${Espesor} mm\nPrecio Unitario U$D${unitarioN} CANTIDAD: ${cantidad} Subtotal U$D ${parcialN}\n`;
            cantidad = NaN;
            parcial = 0;
        }

    continuo = prompt("quiere cotizar otro platina \n s para continuar \n cualquier otro caracter para salir");

} while((continuo == "s") || (continuo == "S") || (continuo == "si") || (continuo == "SI") )

total = parseFloat(total);
totalIVA = total * IVAuru;
totalIVAN = (totalIVA).toFixed(2);
totalIVAinc = total + totalIVA;
totalIVAincN = (totalIVAinc).toFixed(2);


if(total != 0 || total == NaN) {
    alert(`Su carrito de compra consta de:\n${carrito}\nEl TOTAL de su carrito es: U$D${totalN} + IVA  U$D${totalIVAN} = U$D${totalIVAincN}`);
}else {
    alert(`su carrito esta vacio, gracias por usar nuesto cotizador`);
}
