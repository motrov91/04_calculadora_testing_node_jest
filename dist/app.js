"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const yards_plugin_1 = require("./config/plugins/yards.plugin");
const server_app_1 = require("./presentation/server-app");
//console.log(yarg)
//* Funcion anonima autoinvocada.
//(() => {
//    console.log('Ejecutando')
//})()
//* Funcion anonima autoinvocada asincrona
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
}))();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yards_plugin_1.yarg);
        const { b: base, l: limit, s: showTable, n: name, d: destination } = yards_plugin_1.yarg;
        server_app_1.ServerApp.run({ base, limit, showTable, name, destination });
    });
}
