


import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

// const url = 'https://httpbin.org/delay/1';
const url = 'https://api.github.com/usersXXX?per_page=5';

const manejaError = ( resp: AjaxError ) => {
    console.warn('errore: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
} 

// const obs$ = ajax.getJSON( url ).pipe(
//     catchError( manejaError )
// );
// const obs2$ = ajax( url ).pipe(
//     catchError( manejaError )
// );

// obs$.subscribe( data => console.log('getJson:', data));
// obs2$.subscribe( data => console.log('ajax:', data));

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

obs$
.pipe(
    catchError( manejaError )
)
.subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('err en subs', err),
    complete: () => console.warn('complete')
});
// obs2$.subscribe( data => console.log('ajax:', data));