import { of, interval, take, delay, forkJoin } from 'rxjs';

const numeros$  = of(1,2,3,4);
const interval$ = interval(1000).pipe( take(3) ); //0..1..2
const letras$   = of('a','b','c').pipe( delay(3500) );

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe( resp => {

//     console.log('numeros: ', resp[0])
//     console.log('intérvalo: ', resp[1])
//     console.log('letras: ', resp[2])

// });

// forkJoin({
//     numeros$,
//     interval$,
//     letras$
// }).subscribe( resp => {
//     console.log(resp);
// });

forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
}).subscribe( resp => {
    console.log(resp);
});