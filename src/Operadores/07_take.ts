import { of, take, tap } from "rxjs";


// const numeros$ = of(1,2,3,4,5);
const numeros$ = of(1,2,3,4,5)
    .pipe( tap(console.log) );

numeros$.pipe(
    tap( t => console.log('tap', t) ), //para verificar si sigue corriendo el subscribe
    take(3) // cancela la subscripcion para que no siga corriendo
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
})