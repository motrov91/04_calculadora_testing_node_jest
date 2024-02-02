import { SaveFile } from '../../../src/domain/use-cases/save-file.usecase'
import fs from 'fs';

describe('SaveFielUseCase', () => {

    const customOptions = {
        fileContent: 'custom-content',
        fileDestination: 'custom-outputs/file-destination',
        filename: 'custom-table-name'
    }
    const filePath = `${customOptions.fileDestination}/${customOptions.filename}.txt`;

    //* Antes de cada prueba hacemos un clean up, en este caso borramos la carpeta outputs
    //beforeEach(() => {
    //    fs.rmSync('outputs', { recursive: true });
    //})

    //* despues de cada prueba hacemos un clean up, en este caso borramos la carpeta outputs
    afterEach(() => {
        const outputFolderExists = fs.existsSync('outputs')
        if(outputFolderExists) fs.rmSync('outputs', { recursive: true });

        const customOptionsFileExist = fs.existsSync(customOptions.fileDestination);
        if(customOptionsFileExist) fs.rmSync(customOptions.fileDestination, { recursive: true });
    })

    beforeEach(() => {
        //* Limpia todos los mock antes de inicar la siguiente prueba
        //* Este codigo funciona solo cuando tenemos funciones jest como la siguiente.
        //* const logMock = jest.fn()
        jest.clearAllMocks
    })

    test('Should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt'
        const options = {
            fileContent : 'Test File Content'
        }

        const result = saveFile.execute(options);

        
        //* Verificamos que se crea el archivo
        const fileExist = fs.existsSync(filePath)
        //* Verificamos el contenido del archivo
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
        
        expect( fileExist ).toBe(true);
        expect( fileContent ).toBe(options.fileContent)
        expect( result ).toBe(true);
        //Es lo mismo de arriba
        //expect(result).toBeTruthy();
    });

    test('Should save file with custom values', ( ) => {

        const saveFile = new SaveFile();
        //console.log(filePath)

        const result = saveFile.execute(customOptions);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect( fileExist ).toBe(true);
        expect( fileContent ).toBe(customOptions.fileContent);
        expect( result ).toBe(true);
    })

    test('Should return false if directory could not be created', () => {
        const saveFile = new SaveFile();
        /*
            * El spyon, espia el archivo fs (file system) al momento de llamar el metodo mkdirSync
            * Sin el mockImplementation simplemente espiamos que la funcion haya sido llamada si le enviaron paramatros 
            * Al usar mockImplementation me indica que yo quiero sobreescribir por la implementacion que tengo dentro de el mock.
            * Cuando alguien llame el fs.mkdirSync se ejecutaria lo que esta dentro del mock
        */
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom message from testing'); }
        );

        const result = saveFile.execute(customOptions);
        expect( result ).toBe( false );
        
        //* Restauracion del mock para evitar que se ejecute cuando se hacen otras pruebas
        //* Restaura la funcion original
        mkdirSpy.mockRestore();

    });

    test('Should return false if file could not be created', () => {
        const saveFile = new SaveFile();
        /*
            * El spyon, espia el archivo fs (file system) al momento de llamar el metodo mkdirSync
            * Sin el mockImplementation simplemente espiamos que la funcion haya sido llamada si le enviaron paramatros 
            * Al usar mockImplementation me indica que yo quiero sobreescribir por la implementacion que tengo dentro de el mock.
            * Cuando alguien llame el fs.mkdirSync se ejecutaria lo que esta dentro del mock
        */
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('This is a custom message from writeFileSync testing'); }
        );

        const result = saveFile.execute({ fileContent: 'This is the content of file for test'});
        expect( result ).toBe( false );
        writeFileSpy.mockRestore();

    });

});