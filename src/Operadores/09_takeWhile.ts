import { fromEvent, map, takeWhile } from "rxjs";





const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    map( ({ x, y}) => ({ x,y }) ),
    // takeWhile( ({ y }) => y <= 150 ) // no emitio el ultimo valor
    takeWhile( ({ y }) => y <= 150, true ) // inclusive emite el ultimo valor del while al commpletar
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})