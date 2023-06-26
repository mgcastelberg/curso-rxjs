import { ajax } from "rxjs/ajax";



// const url = 'http://iboxx.userhub.virket.lvl:8080/api/users';
const url = 'https://httpbin.org/delay/1';

// ajax.post( url, {
//     name : 'Fatima',
//     first_name : 'Fatima',
//     last_name : 'Garcia',
//     external_id : 'BTF010',
//     email : 'jassgar10@virket.com',
//     password : '123456789',

// }
// // ,{
// //     // headers
// //     'api-token': 'ABC123'
// // }
// ).subscribe( console.log );

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        name : 'Fatima',
        first_name : 'Fatima',
        last_name : 'Garcia',
        external_id : 'BTF010',
    }
}).subscribe( console.log )