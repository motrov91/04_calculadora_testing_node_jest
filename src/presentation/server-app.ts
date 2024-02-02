
//* Clase para mantener estructurada la logica del servidor
import { CreateTable } from "../domain/use-cases/create-table.usecase";
import { SaveFile } from "../domain/use-cases/save-file.usecase";

//Interface simplemente son algunas reglas que deseo que cumpla mi clase.
interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp{

    static run({ base, limit, showTable, name, destination }: RunOptions){
        console.log("Server running...")
        
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            filename: name,
            fileDestination: destination
        })

        if(showTable) console.log(table);

        (wasCreated)
            ? console.log('File created!')
            : console.error('File not created!');
    }
}