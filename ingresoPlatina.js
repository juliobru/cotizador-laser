/* Esta función agrega al Array Carrito una nueva Platina */


function IngresoPlatina() {
    tipoPlatina = parseInt(prompt("patina cuadrada ingrese 1 \nplatina rectangular ingrese 2 \nplatina circular ingrese 3"));
    ValidarForma(tipoPlatina);
    TomarDimensiones(tipoPlatina);
    
    tipoAcero = parseInt(prompt("Material: Acero Inoxidable => ingrese: 1 \nMaterial: Acero Carbono => ingrese: 2"));
    ValidarAcero(tipoAcero);
        
    Espesor = Number(prompt("ingrese el espesor de la platina en mm:"));
    ValidarEspor(Espesor, tipoAcero);
    
    Precio(Espesor,tipoPlatina,tipoAcero);

        cantidad = (prompt(`ha elegido cotizar una platina ${Platina} en ${Acero}\n${textoDim} de espesor = ${Espesor} mm\nel precio unitario de corte es: U$D ${PrecioCorte}\nel precio unitario de material es: U$D ${PrecioMaterial}\nintrotuzca la cantidad que quiere agragar a su carrito (0 para niniguna)`));
        
        ValidarCantidad(cantidad);
      
        
        if(cantidad != 0) {

            item = Carrito.length + 1;
            
            Carrito.push(new Platinadef(item,Platina,Acero,textoDim,Espesor,PrecioCorte,PrecioMaterial,cantidad));
            cantidad = NaN;
            parcial = 0;
        }

}