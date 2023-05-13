// console.log('Hola Manuel Gomez!');
import { Observable } from 'rxjs'

// const obs$ = Observable.create();
// subscripciones proceso que va a estar pendiente de las emisiones de mi observable
// <string> enviamos el tipo de dato
const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Hola Mundo');
    
    subscriber.complete(); //ya no va asegir emitiendo nada

    subscriber.next('Hola');
    subscriber.next('Hola Mundo');

});

obs$.subscribe( resp => console.log(resp) );
