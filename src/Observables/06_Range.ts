import { range, of, asyncScheduler } from 'rxjs';

/** 
 * Crea una secuencia de numeros dentro de un rango especifico "SINCRONO"
 */

// const src$ = of(1,2,3,4,5);
// const src$ = range(1,5);
// const src$ = range(-5,10);

// console.log('Inicio');
// src$.subscribe( console.log );
// console.log('Fin');

// para trabaje de forma asincrona usamos el asyncScheduler

const src$ = range(1,5, asyncScheduler);

console.log('Inicio');
src$.subscribe( console.log );
console.log('Fin');
