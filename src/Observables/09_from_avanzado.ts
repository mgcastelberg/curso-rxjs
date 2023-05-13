import { of, from, async } from "rxjs";

/**
 * of - Toma argumentos y nos genera una secuencia
 * from - crea un obserbable en base a: array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Manuel');
const source$ = from( fetch('http://api.github.com/users/klerith') );

// source$.subscribe( observer );

// source$.subscribe( async resp => {
//     console.log( resp.url );
//     const dataRespuesta = await resp.json();
//     console.log(dataRespuesta);
// });

// Funcion generadora
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

// for (let id of miIterable) {
//     console.log(id);    
// }
from(miIterable).subscribe( observer );