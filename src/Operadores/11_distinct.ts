import { distinct, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

// Solo deja pasar las emisiones cuyos valores previamente no hayan sido emitidos
numeros$
    .pipe(
        distinct()
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
        nombre: 'X'
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
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
]


from( personajes )
    .pipe(
        // distinct() //si lo dejamos asi no hace el filtrado
        distinct( p => p.nombre ) // le ponemos un predicado
    )
    .subscribe(
        console.log
    )