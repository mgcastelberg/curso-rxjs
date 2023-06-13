
import { asyncScheduler, distinctUntilChanged, fromEvent, map, pluck, throttleTime } from "rxjs";


const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000)
).subscribe( console.log )

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );
input$
.pipe(
    // hace la peticion y no la vuelve a hacer hasta que pase un min
    // throttleTime(1000),
    //para que muestre el ultimo
    throttleTime(1000,asyncScheduler,{
        leading: false,
        trailing: true
    }),
    // para extraer un campo de un objeto con sub-valores
    pluck('target','value'),
    // si ya se habia escrito esa palabra y se vuelve a llamar
    distinctUntilChanged()
)
.subscribe( console.log );


