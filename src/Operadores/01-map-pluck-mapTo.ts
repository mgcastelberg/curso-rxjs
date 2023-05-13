



import { map, range, fromEvent, pluck, mapTo } from 'rxjs';


// observable que esta al pendiente de un evento

// MAP
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupCode$ = keyup$.pipe(
    map( event => event.code )
);

// Pluck
// en el primer nivel de json
const keyupPluck$ = keyup$.pipe(
  pluck('key')
);
// en el segundo nivel de json
const keyupPluck2$ = keyup$.pipe(
  pluck('target','baseURI')
);

// MapTo
const keyupMapTO$ = keyup$.pipe(
  mapTo('tecla presionada')
);

keyupCode$.subscribe( code => console.log('map', code) );
keyupPluck$.subscribe( code => console.log('pluck', code) );
keyupPluck2$.subscribe( code => console.log('pluck2', code) );
keyupMapTO$.subscribe( code => console.log('mapTo', code) );
    
// keyup$.subscribe( val => console.log('map', val.code) );

// range(1,5).pipe(
//    map<number, string>( val => (val * 10).toString() ) 
// )
// .subscribe( console.log );

// range(1,5).pipe(
//    map<number, number>( val => {
//      return val * 10;
//    }) 
// )
// .subscribe( console.log );


