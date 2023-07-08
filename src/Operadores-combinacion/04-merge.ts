// Merge funcion - recive uno o mas observables y el resultado va a ser el producto de ambos observables
// el Merge operador no usarlo esta deprecado

import { fromEvent, merge, pluck } from "rxjs";

const keyUp$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

// merge( keyUp$, click$ ).subscribe(
//     console.log
// );

merge( 
    keyUp$.pipe( pluck('type') ), 
    click$.pipe( pluck('type') ) 
).subscribe(
    console.log
);