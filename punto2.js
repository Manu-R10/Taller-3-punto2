let tiempo_limite = 180; // variable que cuenta el límite máximo de tiempo permitido
let advertencias = 0; // variable que cuenta las advertencias acumuladas
let advertencia_maximas = 3; // Variable de Advertencias necesarias para detener el sistema

do {
    let tiempo_uso = parseInt(prompt("Ingrese el tiempo de uso del agua en segundos:"), 10); // Solicita y convierte el tiempo ingresado, el 10 indica que el número ingresado debe interpretarse como decimal

    if (tiempo_uso > tiempo_limite) { // Si supera el límite, se registra una advertencia
        advertencias++;
        alert("Advertencia,excediste el tiempo de uso."); // Muestra la advertencia 
    } else {
        alert("¡Bien! Estás ahorrando agua."); // Mensaje de ahorro si está dentro del límite
    }

    if (advertencias >= advertencia_maximas) { // Si llega al máximo de advertencias, detiene el sistema
        alert("Se ha superado las 3 advertencias maximas. Sistema detenido."); // imprime alerta
        break; // Sale del bucle
    }

} while (advertencias < advertencia_maximas); // Repite hasta que se alcance el máximo de advertencias

alert("Monitoreo de ahorro de agua finalizado."); // imprime Mensaje final cuando el sistema se para