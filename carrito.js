let Carrito = [];

class CrearPlatina {
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
     
    
    totalgeneral() {
        let totalg = 0;
        for(let i = 0; i < Carrito.length; i++) {
            totalg = totalg + this.parcialN;
        }    
            return (totalg).toFixed(2);

         

    }
}





