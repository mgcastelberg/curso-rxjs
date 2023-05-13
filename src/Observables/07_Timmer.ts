import { interval, Observer, timer } from 'rxjs';

/**
 * Interval - Emite una secuencia de numeros en un itervalo de tiempo especificado. Asincrono
 */
const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
}
// console.log('Inicio');
// const intervalo$ = interval(1000);
// intervalo$.subscribe( observer );
// console.log('Final');


/**
 * Timer - Crea un observable que empieza a emitir valores despues de una fecha especifica Asincrono
 */
console.log('Inicio');
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);

timer$.subscribe( observer );
console.log('Final');
