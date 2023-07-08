import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";


const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );


// click$.pipe(
//     switchMap( () => interval$ )
// ).subscribe( console.log );

// concatMap en cola los observables para que se ejecuten secuencianmente al completar el anterior
click$.pipe(
    concatMap( () => interval$ )
).subscribe( console.log );