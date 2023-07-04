import { debounceTime, fromEvent, map, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";


// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');


body.append(textInput, orderList);


// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime(500), // para que no realice key up cada letra si no cada 500 milesimas de segundo
    map( event => {
        const texto = event.target['value'];
        // return texto;
        return ajax.getJSON(
            `https://api.github.com/users/${ texto }`
        )
    })
).subscribe( resp => {
    // resp.subscribe( console.log )
    resp.pipe(
        pluck('url')
    ).subscribe( console.log )
});