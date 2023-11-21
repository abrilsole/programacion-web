function cantrestantes() {
    let cantRusuario;

    do {
        cantRusuario = prompt('Ingrese la cantidad de recetas que pidió este mes');

        // Verificar si es un número válido
        if (isNaN(cantRusuario)) {
            alert('Por favor, ingrese un número válido.');
        } else {
            // Convertir la entrada a un número
            cantRusuario = parseInt(cantRusuario);

            // Verificar si está en el rango deseado
            if (cantRusuario > 0 && cantRusuario < 10) {
                let rrestantes = 10 - cantRusuario;
                alert(`Le quedan ${rrestantes} recetas`);
                break; // Salir del bucle si la entrada es válida
            } else if (cantRusuario >= 10) {
                alert(`No le quedan más recetas`);
                break; // Salir del bucle si la entrada es válida    
            } else {
                alert('Por favor, ingrese un número mayor a 0 y menor a 10.');
            }
        }
    } while (true); // Bucle infinito hasta que se ingrese una entrada válida
}



function checkout(){
    alert('Desea guardar sus datos para próximas recetas?')
}

cantrestantes();
