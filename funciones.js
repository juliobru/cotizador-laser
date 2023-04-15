function ValidarForma(tipoPlat) {
    while ((tipoPlat != 1) && (tipoPlat != 2) && (tipoPlat != 3)) {
        
        tipoPlat = parseInt(prompt("no ingreso un tipo válido:\n patina cuadrada ingrese 1 \n platina rectangular ingrese 2 \n platina circular ingrese 3"));
    }
    switch (tipoPlat) {
        case 1:
            Platina = "cuadrada";
            tipoPlatina = tipoPlat;
            break;
        case 2:
            Platina = "rectangular";
            tipoPlatina = tipoPlat;
            break;
        case 3:
            Platina = "circular";
            tipoPlatina = tipoPlat;
            break;

    }
}


function TomarDimensiones(tipoPlatina) {
        switch(tipoPlatina) {
            case 1:
                LadoCuadrado = Number(prompt("Ingrese la dimensión del lado del cuadrado en mm"));
                while((LadoCuadrado <=0) || (LadoCuadrado > 1500)) {
                    LadoCuadrado = Number(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));
                }
                break;
            case 2:
                ladoA = Number(prompt("Ingrese la dimensión del lado A del rectángulo en mm"));
                while((ladoA <=0) || (ladoA > 1500)) {
                    ladoA = Number(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));
                }
                ladoB = Number(prompt("Ingrese la dimensión del lado B del rectángulo en mm"));
                while((ladoB <=0) || (ladoB > 1500)) {
                    ladoB = Number(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));
                }
                break;
            case 3:  
                Diametro = Number(prompt("Ingrese la dimensión del lado del diámetro en mm"));
                while((Diametro <=0) || (LadoCuadrado > 1500)) {
                    Diametro = parseNum(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));
                }
                break;
           
        }
    }









function ValidarAcero(tipoAcero) {
    while ((tipoAcero != 1) && (tipoAcero != 2)) {
        
        tipoAcero = parseInt(prompt("no ingreso un tipo válido:\n Material: Acero Inoxidable => ingrese: 1 \n Material: Acero Carbono => ingrese: 2"));
    }
    switch (tipoAcero) {
        case 1:
            Acero = "Acero Inoxidable"
            break;
        case 2:
            Acero = "Acero al Carbono"
            break;

    }
}
