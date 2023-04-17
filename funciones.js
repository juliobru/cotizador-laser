/* Esta función valida que la forma de la platina sea cuadrada, rectangular o circular */

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

/* Esta función solicita al usuario las dimensiones de la platina */

function TomarDimensiones(tipoPlatina) {
    switch (tipoPlatina) {
        case 1:
            LadoCuadrado = Number(prompt("Ingrese la dimensión del lado del cuadrado en mm\n(valores ente 0 y 1500 mm)"));
            while ((LadoCuadrado <= 0) || (LadoCuadrado > 1500) || (isNaN(LadoCuadrado))) {
                LadoCuadrado = Number(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));
            }
            textoDim = (`de lado ${LadoCuadrado} mm`);
            break;
        case 2:
            ladoA = Number(prompt("Ingrese la dimensión del lado A del rectángulo en mm\n(valores ente 0 y 1500 mm)"));
            while ((ladoA <= 0) || (ladoA > 1500) || (isNaN(ladoA))) {
                ladoA = Number(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));
            }
            ladoB = Number(prompt("Ingrese la dimensión del lado B del rectángulo en mm\n(valores ente 0 y 1500 mm)"));
            while ((ladoB <= 0) || (ladoB > 1500) || (isNaN(ladoB))) {
                ladoB = Number(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));
            }
            textoDim = (`de lado A = ${ladoA} mm x lado B = ${ladoB} mm`);
            break;
        case 3:
            Diametro = Number(prompt("Ingrese la dimensión del lado del diámetro en mm\n(valores ente 0 y 1500 mm)"));
            while ((Diametro <= 0) || (Diametro > 1500) || (isNaN(Diametro))) {
                Diametro = Number(prompt("el valor no es válido, debe ser 0 < L < 1500 mm"));

            }
            textoDim = (`de Diámetro = ${Diametro} mm`);
            break;

    }
}

/* Esta función valida el tipo de acero que se va a utilizar */

function ValidarAcero(tipo) {
    while ((tipo != 1) && (tipo != 2)) {

        tipo = parseInt(prompt("no ingreso un tipo válido:\n Material: Acero Inoxidable => ingrese: 1 \n Material: Acero Carbono => ingrese: 2"));
    }
    switch (tipo) {
        case 1:
            Acero = "Acero Inoxidable"
            tipoAcero = 1;
            break;
        case 2:
            Acero = "Acero al Carbono"
            tipoAcero = 2;
            break;

    }
}

/* Esta función valida que la cantidad de platinas sea un número entero >= 0 */

function ValidarCantidad(ctd) {
    ctd = parseFloat(ctd);
    decimal = ctd - parseInt(ctd);
    
    while(ctd == NaN ||  ctd < 0 || decimal != 0) {
        ctd = prompt(`ingrese la cantidad que requiere, 0 para ninguna. (No ingrese en blanco)`)
        ctd = parseFloat(ctd);
        decimal = ctd - parseInt(ctd);
    }
    
    cantidad = ctd;
}

