function ImprimirCarrito() {
    carrito = "";
    Carrito.forEach((mostrar) => { 
        carrito = carrito + `\nitem ${mostrar.item} Platina ${mostrar.Platina} de ${mostrar.Acero} y dimensiones ${mostrar.textoDim} espesor ${mostrar.espesor}\nprecio Corte U$D${mostrar.PrecioCorte} precio Material U$D${mostrar.PrecioMaterial} precio Unitario U$D${mostrar.unitarioN} cantidad ${mostrar.cantidad}  Subtotal U$D${mostrar.parcialN}\n`;
    }  );
            totalgeneral = Carrito.reduce((acumulador, item) => { return acumulador + item.parcialN }, 0);
            totalIVA = (totalgeneral * IVAuru).toFixed(2);
            totalconIVA = (Number(totalIVA) + totalgeneral).toFixed(2);
            totalgeneral = totalgeneral.toFixed(2);
            console.table(Carrito);
            console.log(`El Total es U$D${totalgeneral} + IVA U$D${totalIVA} = U$D${totalconIVA}`);
            if(Carrito.length == 0) {
                texto3 = `Para agregar un item ingrese: Agregar\nPara Salir del cotizador ingrese: Salir`;
            }else {
                texto3 = `Para modificar la cantidad de un item ingrese: Modificar\nPara agregar un Item ingrese Agregar\nPara eliminar un item ingrese Eliminar\nPara modificar el espesor de todas las platinas de un mismo material ingresar: Cambio\nPara Confirmar su Carrito ingrse Salir`;

            }
            modificarCarrito =prompt(`Su carrito de compra consta de:\n${carrito}\nEl TOTAL de su carrito es: U$D${totalgeneral} + IVA  U$D${totalIVA} = U$D${totalconIVA}\n${texto3}`);
}