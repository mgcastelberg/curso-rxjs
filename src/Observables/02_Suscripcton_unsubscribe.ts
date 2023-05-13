import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: error => console.log('[error]:', error),
    complete: () => console.info('[completed]')
};

const intervalo$ = new Observable<number>( subscriber => {

    let contador=0;
    //Crear un contador
    const interval =setInterval(() => {
        //cada segundo
        contador++
        subscriber.next(contador);
        console.log(contador);

    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

});

const subscripcion1 = intervalo$.subscribe( num => console.log('Num:', num ));
const subscripcion2 = intervalo$.subscribe( num => console.log('Num:', num ));
const subscripcion3 = intervalo$.subscribe( num => console.log('Num:', num ));

setTimeout(() => {
    subscripcion1.unsubscribe();
    subscripcion2.unsubscribe();
    subscripcion3.unsubscribe();
    console.log('Completado timeout');
}, 6000);