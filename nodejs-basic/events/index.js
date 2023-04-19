const { EventEmitter } = require('events'); //TODO 1

// const myEventEmitter = new EventEmitter();

// //fungsi yang akan dijalankan ketika event coffe-order terjadi
// const makeCoffe = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat`);
// };

// //mendaftarkan fungsi makeCoffe sebagai listener event coffe-order
// myEventEmitter.on('coffe-order', makeCoffe);

// //memicu event 'coffe-order' terjadi.
// myEventEmitter.emit('coffe-order', { name: 'espresso' });





//TODO 2
const birthdayEventListener = (name) => {
    console.log(`happy birthday ${name}`);
};

//TODO 3
const myEmmiter = new EventEmitter();

//TODO 4
myEmmiter.on('birthday', birthdayEventListener);

//TODO 5
myEmmiter.emit('birthday','Girindra');

