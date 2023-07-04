
import { concatMap, exhaustMap, fromEvent, interval, switchMap, take } from "rxjs";


const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

// // concatMap en cola los observables para que se ejecuten secuencianmente al completar el anterior
// click$.pipe(
    //     concatMap( () => interval$ )
    // ).subscribe( console.log );
    
// ExhaustMap solo mantiene una suscripcion activa antes de completar 
// una activa, las demas las ignora
click$.pipe(
    exhaustMap( () => interval$ )
).subscribe( console.log );