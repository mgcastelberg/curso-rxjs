import { fromEvent, interval, sample } from 'rxjs';



//Emite el ultimo valor emitido del obserbable hasta que el otro operador emita un valor
const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);