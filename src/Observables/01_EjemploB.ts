import { Observable } from 'rxjs'

// subscripciones proceso que va a estar pendiente de las emisiones de mi observable
// <string> enviamos el tipo de dato
const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Hola Mundo');
    
    //forzar un error
    // const a = undefined;
    // a.nombre = 'Fernando';

    subscriber.complete(); //ya no va asegir emitiendo nada

    subscriber.next('Hola');
    subscriber.next('Hola Mundo');

});

// Segunda forma
obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error), 
    () => console.log('complete')
);



