import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs";
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

// input$.pipe(
//     debounceTime<KeyboardEvent>(700), // para que no realice key up cada letra si no cada 700 milesimas de segundo
//     map<KeyboardEvent, string>( event => (event.target as HTMLInputElement).value),
//     mergeMap<string, Observable<GithubUsersResp>>( texto =>  ajax.getJSON(
//         `https://api.github.com/search/users?q=${ texto }`
//     )),
//     map<GithubUsersResp, GithubUser[]>(item => item.items)
// );
// .subscribe( users => {
// //    console.log (users);
//     mostrarUsuarios(users);
// });

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map<KeyboardEvent, string>( event => (event.target as HTMLInputElement).value),
    switchMap<string, Observable<GithubUsersResp>>( texto =>  ajax.getJSON( url + texto )),
).subscribe( console.log );