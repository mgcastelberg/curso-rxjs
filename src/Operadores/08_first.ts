import { first, fromEvent, map, tap } from "rxjs";




const click$ = fromEvent<MouseEvent>( document, 'click');

// click$.subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// });

// si solo nos interesa la primera emision del click
// click$.pipe(
//     tap( ()=> console.log('tap')), //solo para ver que se esta ejecutando
//     // first() //solo tamara el primer click
//     first<MouseEvent>( event => event.clientY >= 150) // obtener el primer evento donde clientY >= 150
// )
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// });

// si solo nos interesa la primera emision del click para no mandar todas las propiedades del click
click$.pipe(
    tap<MouseEvent>( console.log ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX,
    // }))
    map( ({ clientX, clientY }) => ({ clientX, clientY }) ),
    first( event => event.clientY >= 150) // obtener el primer evento donde clientY >= 150
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});