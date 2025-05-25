let tiempo_limite = 180;
let advertencias = 0;
let advertencia_maximas = 3;

do {
    let tiempo_uso = parseInt(prompt("Ingrese el tiempo de uso del agua en segundos:"), 10);
        tiempo_uso;
    if (tiempo_uso > tiempo_limite) {
        advertencias++;
        alert("Advertencia,excediste el tiempo de uso.");
    } else {
        alert("¡Bien! Estás ahorrando agua.");
    }

    if (advertencias >= advertencia_maximas) {
        alert("Se ha superado las 3 advertencias maximas. Sistema detenido.");
        break;
    }

} while (advertencias < advertencia_maximas);

alert("Monitoreo de ahorro de agua finalizado.");