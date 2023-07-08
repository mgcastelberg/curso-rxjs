import { combineLatest, fromEvent, merge, pluck } from "rxjs";

const keyUp$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

// combineLatest( 
//     keyUp$.pipe( pluck('type') ), 
//     click$.pipe( pluck('type') ) 
// ).subscribe(
//     console.log
// );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'emai@test.com';
input2.placeholder = '*****';
input2.type = 'password';

document.querySelector('body').append(input1,input2);

// Helper
const getInputStream = (el: HTMLElement) => {
    return fromEvent<KeyboardEvent>( el, 'keyup').pipe(
        pluck<KeyboardEvent>('target', 'value')
    )
}

combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 ),
).subscribe( console.log );
