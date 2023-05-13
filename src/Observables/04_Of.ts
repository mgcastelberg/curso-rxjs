import { of } from 'rxjs';

/**
 * Of - Convierte el argumento en una secuencia de valores que van a ser emitidos de forma sincrona 
 */

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number[]>(...[1,2,3,4,5,6]);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Observable');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);
    
console.log('Fin del obs');