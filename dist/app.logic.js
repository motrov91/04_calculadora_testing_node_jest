"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yards_plugin_1 = require("./config/plugins/yards.plugin");
//*Renombrar las variables en la destructuracion de javascript
const { b: bases, l: limit, s: showTable } = yards_plugin_1.yarg;
console.log({ bases });
console.log({ limit });
console.log({ showTable });
let outputMessage = '';
const base = bases;
const headerMessage = `
==============================
    Tabla del 5 ${bases}
==============================\n
`;
for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i} \n`;
}
