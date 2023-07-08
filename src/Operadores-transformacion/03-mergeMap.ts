import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from 'rxjs';

// mergeMap Operador de aplanamiento

const letras$ = of('a','b','c');

// Ejercicio 1
letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ))
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});

// Ejercicio 2
// const mouseDown$ = fromEvent( document, 'mousedown');
// const mouseUp$ = fromEvent( document, 'mouseup');
// const interval$ = interval();

// mouseDown$.pipe(
//     mergeMap( () => interval$.pipe(
//         takeUntil( mouseUp$ )
//     ))
// ).subscribe(console.log);