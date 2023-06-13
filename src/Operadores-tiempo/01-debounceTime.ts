import { debounce, debounceTime, distinctUntilChanged, fromEvent, map, pluck } from "rxjs";


const click$ = fromEvent( document, 'click' );

click$.pipe(
    debounceTime(3000)
).subscribe( console.log )

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );
input$
.pipe(
    // no hace la peticion hasta despues de 1 seg
    debounceTime(1000),
    // para extraer un campo de un objeto con sub-valores
    pluck('target','value'),
    // si ya se habia escrito esa palabra y se vuelve a llamar
    distinctUntilChanged()
)
.subscribe( console.log );