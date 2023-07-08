import { Observable, debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user";
import { GithubUsersResp } from "../interfaces/github-users";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {

    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) // ciclo for of : de ES6
    {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor    = document.createElement('a');
        anchor.href     = usuario.html_url;
        anchor.text     = 'Ver pagina';
        anchor.target   = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(700), // para que no realice key up cada letra si no cada 700 milesimas de segundo
    map<KeyboardEvent, string>( event => (event.target as HTMLInputElement).value),
    // pluck<KeyboardEvent>('target', 'value'), //2023 pluck deprecado ya no soporta asignarle tipado
    map<string, Observable<GithubUsersResp>>( texto =>  ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    mergeAll<Observable<GithubUsersResp>>(),
    // pluck<any, GithubUser[]>('items') // 2023 como pluck no soporta el tipado lo cambiamos por el map
    map<GithubUsersResp, GithubUser[]>(item => item.items)
).subscribe( users => {
//    console.log (users);
    mostrarUsuarios(users);
});