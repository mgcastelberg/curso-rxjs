import { asyncScheduler  } from "rxjs";

// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

// Las funciones de flecha son conocidas como landafunction

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${ nombre }`);

// set timmeout
asyncScheduler.schedule( saludar, 2000 );
asyncScheduler.schedule( saludar2, 2000, 'Fernando' );

// set Interval
const subs = asyncScheduler.schedule(function(state){

    console.log("state:", state);
    // para que sea iterativo cambiamos el estado
    this.schedule(state + 1, 1000);

}, 3000, 0 ); //el ultimo argumento es el state

// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);

// como es un suscriber
// podemos utilizar un schodule
asyncScheduler.schedule( () => subs.unsubscribe(), 6000); 