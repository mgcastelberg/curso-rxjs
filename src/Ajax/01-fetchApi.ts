
const url = 'https://api.github.com/useXXXrs?per_page=5';
// fetch API
const fetchPromesa = fetch( url ); // Trabaja en base a promesas y no a observables

// fetchPromesa
//     .then( console.log )
//     .catch()

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en usuarios', err))


/** Manejar o controlar si ocurrio un err en la peticion */
// funcion maneja errores
const manejaErrores = (response: Response) => {
    if( !response.ok ){
        throw new Error( response.statusText );
    }
    return response;
}

fetchPromesa
    .then( manejaErrores )
    .then( resp => resp.json() )
    .then( data => console.log('data:', data) )
    .catch( err => console.warn('error en usuarios', err))