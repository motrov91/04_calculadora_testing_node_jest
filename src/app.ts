import { yarg } from "./config/plugins/yards.plugin";
import { ServerApp } from "./presentation/server-app";

//console.log(yarg)

//* Funcion anonima autoinvocada.
//(() => {
//    console.log('Ejecutando')
//})()

//* Funcion anonima autoinvocada asincrona
(async() => {
    await main();
})()

async function main(){

    console.log(yarg);
    const { b:base, l:limit, s: showTable, n: name, d:destination } = yarg;

    ServerApp.run({ base, limit, showTable, name, destination});
}