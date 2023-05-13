import { from, map, reduce, scan } from 'rxjs';
const numbers = [1,2,3,4,5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numbers).pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log );

// scan
from(numbers).pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log );

// redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'Manu', autenticado: false, token: null },
    { id: 'Manu', autenticado: true, token: 'ABC' },
    { id: 'Manu', autenticado: true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<Usuario, Usuario>( (acc:any, cur:any) => {
        return { ...acc, ...cur }
    },{ edad: 33})
);

// const id$ = state$.pipe(
//     map( state => state.id )
// );

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe(console.log)