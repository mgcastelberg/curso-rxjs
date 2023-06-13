import { fromEvent, map, sampleTime } from "rxjs"



const click$ = fromEvent<MouseEvent>( document, 'click');

// click$.subscribe(console.log);
click$.pipe(
    sampleTime(3000),
    map( ({x, y}) => ({x, y}))
).subscribe(console.log);