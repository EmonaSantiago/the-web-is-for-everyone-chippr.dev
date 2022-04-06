// console. log('hello world 👋')

// process.on('exit', function(){

// })

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch',() => {

//     console.log('Yummy 🍚')
// })

// Registering for the event with callback parameters
// eventEmitter.on('lunch', (code, msg)=> console.log(`Got ${code} and ${msg}`));

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch', 200, 'ok');

// const { readFile, readFileSync } = require('fs');

// const txt = readFileSync ('./hello.txt', 'utf8');
// console.log(txt)

// console.log('Im also here Emona')

// make your code non blocking. switch up consoles. Ook al de console eerder in scriopt wordt de ander eerst aangegeven. 
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)

// })

// Promisses; async, non blocking
// const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }



// const myModule = require('./my-module');

// console.log(myModule)

// const { readFile } = require('fs').promises;

// app.get('./', async (request, response) => {

//     response.send( await readFile('./home.html', 'utf8') );

// });

const express = require('express');
const { read, readFile } = require('fs');

const app = express(); 

app.get('/', (request, response) => {
     
    readFile('./index.html', 'utf-8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, out of order')
        }

        response.send(html)

    })
});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http:localhost:3000`))



