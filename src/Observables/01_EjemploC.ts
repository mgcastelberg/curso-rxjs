import { Observable, Observer } from 'rxjs'

// Obliga a establecer lo necesario para que sea un observer valido
const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.log('error [obs]:', error),
    complete: () => console.info('completado [obs]')
};

// subscripciones proceso que va a estar pendiente de las emisiones de mi observable
// <string> enviamos el tipo de dato
const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Hola Mundo');
    
    // forzar un error
    // const a = undefined;
    // a.nombre = 'Fernando';

    subscriber.complete(); //ya no va asegir emitiendo nada

    subscriber.next('Hola');
    subscriber.next('Hola Mundo');

});

// Tercera forma
obs$.subscribe(observer);

