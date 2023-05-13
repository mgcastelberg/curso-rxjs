import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of<any>(1,'1',1,1,3,3,2,2,4,4,5,3,1);

// distincUntilChange Emite valores siempre y cuando EL VALOR ANTERIOR no sea el mismo
numeros$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe( console.log );


// Ejercicio 2
// info typescript de como es mi objeto
interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
]


from( personajes )
    .pipe(
        // distinct() //si lo dejamos asi no hace el filtrado
        distinctUntilChanged( (ant,act) => ant.nombre === act.nombre )
    )
    .subscribe(
        console.log
    )