//* Reglas de negocio que quiero que mi clase implemente
export interface CreateTableUseCase{
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions{
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase{

    constructor(
        /*
            * DI - Dependency Injection
        */
    ){}

    //* Ejecutamos el caso de uso
execute({ base, limit = 10 }: CreateTableOptions){

        let outputMessage='';

        for (let i = 1; i <= limit; i++){
            outputMessage += `${base} x ${ i } = ${ base * i } \n`

            if( i < limit) outputMessage += '\n'
        }

        return outputMessage;
    }
}