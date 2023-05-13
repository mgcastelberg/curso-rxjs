import { fromEvent } from 'rxjs';

/**
 *  Eventos del DOM
 */

const src$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
    next: val => console.log('Next',val)
};

// src$.subscribe(evento =>{
//     console.log(evento.x);
//     console.log(evento.y);
// });

src$.subscribe( ({ x, y}) =>{
    console.log(x, y);
});

src2$.subscribe(evento =>{
    console.log(evento.key);
});
