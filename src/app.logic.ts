import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

//*Renombrar las variables en la destructuracion de javascript
const { b:bases, l:limit, s:showTable } = yarg;

console.log({bases})
console.log({limit})
console.log({showTable})


let outputMessage = '';

const base = bases;
const headerMessage = `
==============================
    Tabla del 5 ${bases}
==============================\n
`;

for (let i = 1; i <= limit; i++){
    outputMessage += `${base} x ${ i } = ${ base * i } \n`
}

