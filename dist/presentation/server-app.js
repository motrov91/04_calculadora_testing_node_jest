"use strict";
//* Clase para mantener estructurada la logica del servidor
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_usecase_1 = require("../domain/use-cases/create-table.usecase");
const save_file_usecase_1 = require("../domain/use-cases/save-file.usecase");
class ServerApp {
    static run({ base, limit, showTable, name, destination }) {
        console.log("Server running...");
        const table = new create_table_usecase_1.CreateTable().execute({ base, limit });
        const wasCreated = new save_file_usecase_1.SaveFile().execute({
            fileContent: table,
            filename: name,
            fileDestination: destination
        });
        if (showTable)
            console.log(table);
        (wasCreated)
            ? console.log('File created!')
            : console.error('File not created!');
    }
}
exports.ServerApp = ServerApp;
