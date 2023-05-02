/* este es el constructor del carrito con los tipos de Platina que define el usuario */

class Platinadef {

    item;
    Platina;
    Acero;
    textoDim;
    espesor;
    PrecioCorte;
    PrecioMaterial;
    cantidad;
    unitarioN;
    parcialN;

    constructor(item,Platina,Acero,textoDim,espesor,PrecioCorte,PrecioMaterial,cantidad,unitarioN,parcialN){
        this.item = item;
        this.Platina = Platina;
        this.Acero = Acero;
        this.textoDim = textoDim;
        this.espesor = espesor;
        this.PrecioCorte = PrecioCorte;
        this.PrecioMaterial = PrecioMaterial;
        this.cantidad = cantidad;
        this.unitarioN = parseFloat((Number(this.PrecioCorte) + Number(this.PrecioMaterial)).toFixed(2));
        this.parcialN = parseFloat((this.unitarioN * this.cantidad).toFixed(2));
    }

}





