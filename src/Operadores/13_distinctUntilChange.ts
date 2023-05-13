import { distinctUntilKeyChanged, from } from "rxjs";

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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(
        console.log
    )