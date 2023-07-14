import { interval, map, reduce, take } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// Resultado Profe
(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        map( i => inicio - i),
        take(inicio + 1)
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();