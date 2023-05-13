import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: error => console.log('[error]:', error),
    complete: () => console.info('[completed]')
};

const intervalo$ = new Observable<number>( subs => {

    // Emite un numero random cada segundo
    // setInterval( () => subs.next( Math.random() ), 1000 );

    const intervalID = setInterval( 
        () => subs.next( Math.random() ), 1000 
    );

    return() => {
        clearInterval( intervalID );
        console.log('My intervalo destruido');
    };

});

/**
 * Subject
 * 1 Casteo multiple
 * 2 Tambien es un observer
 * 3 También se puede manejar Next, Error, Complete
 */
const subject$ = new Subject();


const intervalObject = intervalo$.subscribe(subject$); //paso adicional para que se subscriba a la misma peticion

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    // Hot Observable
    subject$.next(10);
    subject$.complete();
    intervalObject.unsubscribe();
});

// Para que este codigo se ejecute debe existir almenos una subscripción
// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd));




