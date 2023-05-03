/* se pretende realizar un cotizador de corte laser de platinas, cuadradas, rectangulares y circulares,
en acero inoxidable y acero al carbono.
el precio del corte se calcula multiplicando el perímetro por el precio por metro que depende del espesor y del material
Así mismo se debe pasar el precio del material que depende del peso del material necesario por el precio por kg del material,
con su correspondiente scrap.
Luego se genera un carrito pidiendo la cantidad de cada tipo cotizado
Finalmente se le dan las opciones al usuario de Modificar la cantidad, agregar, eliminar, de un item del carrito o salir.
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
let totalN = NaN;     
let parcialN = NaN;   
let totalIVA = NaN;
let totalIVAN;
let totalconIVA = 0;
let totalgeneral = 0;
let Carrito = [];
let ACarrito =[];
let textoitem = NaN;
let texto1= "";
let texto2= '';
let ItemArray = -1;
let modCarg = "";
let textoAcero;
let esp;
let CambioMaterial1 = [];





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


    IngresoPlatina()
    continuo = prompt("quiere cotizar otro platina \n s para continuar \n cualquier otro caracter para salir");

} while((continuo == "s") || (continuo == "S") || (continuo == "si") || (continuo == "SI") )

if(Carrito.length == 0) {
    modificarCarrito = "Agregar";
}else {
    modificarCarrito = NaN;
}

do {
        if(Carrito.length != 0 || modificarCarrito == "Agregar") {
            textCarrito = "!!";
            ImprimirCarrito();
            
            ValidarModificarCarrito(modificarCarrito);
                switch(modificarCarrito){
                    case "Eliminar":
                        if(Carrito.length == 1){
                            ItemArray = 1;
                        }else{
                        textoitem = "Eliminar"
                        ItemArray = prompt(`ingrese el número de item que desea ${textoitem}`)
                        ValidarItemElMo(ItemArray);
                        }
                       
                        Carrito.splice(ItemArray-1,1);                    
                
 
                        NuevoCarrito = Carrito.map((elemento,index)=> {return {item: elemento.item=index+1,Platina: elemento.Platina,Acero: elemento.Acero,textoDim: elemento.textoDim,espesor: elemento.espesor,PrecioCorte: elemento.PrecioCorte,PrecioMaterial: elemento.PrecioMaterial,cantidad: elemento.cantidad,unitarioN: elemento.unitarioN,parcialN:elemento.parcialN}})   
                        Carrito = NuevoCarrito;
                        modificarCarrito = "Agregar";
                        break;
                    
                    case "Agregar":
                        IngresoPlatina();
                    break;

                    case "Modificar":
                        textoitem = "Modificar";
                        if(Carrito.length == 1){
                            ItemArray = 1;
                        }else{
                        ItemArray = prompt(`ingrese el número de item que desea ${textoitem}`)
                        ValidarItemElMo(ItemArray);
                        }
                        console.log(ItemArray);

                        LineaModificar = Carrito.filter((itemM) => itemM.item == ItemArray);
                        console.table(LineaModificar);

                        LineaModificar.forEach((ItemModificar) => {
                            texto1 = `platina ${ItemModificar.Platina} en ${ItemModificar.Acero}\n${ItemModificar.textoDim} de espesor = ${ItemModificar.espesor} mm\nel precio unitario de corte es: U$D ${ItemModificar.PrecioCorte}\nel precio unitario de material es: U$D ${ItemModificar.PrecioMaterial}\nintrotuzca la cantidad que quiere agragar a su carrito (0 para niniguna)`
                        });
                                            
                        
                      
                        cantidad = (prompt(texto1));
                        ValidarCantidad(cantidad);
                        NuevoCarrito = Carrito.map(function (elemento) {
                            if(elemento.item != ItemArray) 
                            return {item: elemento.item,Platina: elemento.Platina,Acero: elemento.Acero,textoDim: elemento.textoDim,espesor: elemento.espesor,PrecioCorte: elemento.PrecioCorte,PrecioMaterial: elemento.PrecioMaterial,cantidad: elemento.cantidad,unitarioN: elemento.unitarioN,parcialN:elemento.parcialN=elemento.parcialN} 
                            {return {item: elemento.item,Platina: elemento.Platina,Acero: elemento.Acero,textoDim: elemento.textoDim,espesor: elemento.espesor,PrecioCorte: elemento.PrecioCorte,PrecioMaterial: elemento.PrecioMaterial,cantidad: elemento.cantidad = cantidad,unitarioN: elemento.unitarioN,parcialN: elemento.parcialN = Number((elemento.unitarioN*cantidad).toFixed(2))}
                        }})
                            Carrito = NuevoCarrito;
                        break;
                    
                    case "Cambio":
                        flag1 = 0;
                        esp = parseFloat(prompt('Indique el espesor que desea modificar'));
                        tipoA = parseInt(prompt('indique el material que desea modificar\n1.-Para Acero Inox\n2.-Para Acero al carbono'));
                        ValidarAcero(tipoA);
                        Nuevoesp = Number(prompt('Indique el nuevo espesor que desea utilizar'));
                        ValidarEspor(Nuevoesp, tipoA);
                        Nuevoesp = Espesor;
                        switch(tipoA){
                            case 1 : textoAcero= 'Acero Inoxidable';break;
                            case 2 : textoAcero= 'Acero al Carbono';break;
                        }
                        CambioMaterial1 = Carrito.filter((elemento) => (elemento.espesor == esp && elemento.Acero == textoAcero ))
                        Carrito = Carrito.map( function (elemento) { if (elemento.espesor == esp && elemento.Acero == textoAcero ) {
                            flag1 = 1;
                            tipoPst = elemento.Platina;
                            Qty = elemento.cantidad;
                            textoDimRec = elemento.textoDim;
                            dimSt = textoDimRec.replace(/[^0-9]+/g, "");
                            dimSt = Number(dimSt);
                            switch(tipoPst){
                                case 'cuadrada': tipoP = 1; LadoCuadrado = (dimSt); break;
                                case 'rectangular': tipoP =2;
                                ladoAt = textoDimRec.slice(0,20);
                                ladoA = Number(ladoAt.replace(/[^0-9]+/g, ""));
                                ladoBt = textoDimRec.slice(20);
                                ladoB = Number(ladoBt.replace(/[^0-9]+/g, ""));
                                break;
                                case 'circular': tipoP = 3; Diametro = (dimSt); break;
                            }
                            Precio(Nuevoesp, tipoP, tipoA);
                            PrecioCorte = Number(PrecioCorte);
                            PrecioMaterial = Number(PrecioMaterial);
                            PrecioCorteC = `${PrecioCorte}`;
                            PrecioMaterialC = `${PrecioMaterial}`;
                            
                            return {item: elemento.item,Platina: elemento.Platina,Acero: elemento.Acero,textoDim: elemento.textoDim,espesor: elemento.espesor = Nuevoesp,PrecioCorte: elemento.PrecioCorte = PrecioCorteC,PrecioMaterial: elemento.PrecioMaterial = PrecioMaterialC,cantidad: elemento.cantidad,unitarioN: elemento.unitarioN=Number((PrecioMaterial+PrecioCorte).toFixed(2)) ,parcialN: elemento.parcialN= Number(((PrecioMaterial+PrecioCorte)*Qty).toFixed(2))} 
                            }
                            {return {item: elemento.item,Platina: elemento.Platina,Acero: elemento.Acero,textoDim: elemento.textoDim,espesor: elemento.espesor,PrecioCorte: elemento.PrecioCorte,PrecioMaterial: elemento.PrecioMaterial,cantidad: elemento.cantidad,unitarioN: elemento.unitarioN,parcialN: elemento.parcialN = elemento.parcialN}        
                            
                            }});

                            if(flag1==0) {alert(`el espesor ingresado: ${esp} no se encuentra en ${textoAcero}`)}
                        
                         /*   console.table(Carrito); */
                    break;

                      

                    case "Salir":
                        if(totalgeneral != 0) {
                        textCarrito = "Gracias por su compra !!";
                        }else{
                            textCarrito = `su carrito esta vacio, gracias por usar nuesto cotizador`;
                        }
                    break;

                }
        }else {
            modificarCarrito = "Salir"
            textCarrito = `su carrito esta vacio, gracias por usar nuesto cotizador`;
        }


    } while(modificarCarrito != "Salir") 
    alert(textCarrito)