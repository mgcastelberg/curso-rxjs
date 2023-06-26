
import { catchError, map, of, pluck } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';
// fetch API
// const fetchPromesa = fetch( url ); // Trabaja en base a promesas y no a observables

/** Manejar o controlar si ocurrio un err en la peticion */
// funcion maneja errores
// const manejaErrores = (response: Response) => {
//     if( !response.ok ){
//         throw new Error( response.statusText );
//     }
//     return response;
// }

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en usuarios', err))

const atrapaError = ( err: AjaxError) => {
    console.warn('error en: ', err.message);
    return of([]);
}

ajax( url ).pipe(
    // map( resp => resp.response )
    pluck('response'),
    catchError( atrapaError )
)
.subscribe( users => console.log('usuarios', users) );

// ajax( url ).pipe(
//     // map( resp => resp.response )
//     pluck('response'),
//     catchError( err => {
//         console.warn('error en: ', err);
//         return of([]);
//     })
// )
// .subscribe( users => console.log('usuarios', users) );