import { ServerApp } from '../../src/presentation/server-app';
import { CreateTable } from '../../src/domain/use-cases/create-table.usecase';
import { SaveFile } from '../../src/domain/use-cases/save-file.usecase';



describe('Server App', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        destination: 'test-destination',
        name: 'test-filename'
    };

    test('Should create ServerApp instance', () => {
        const serverapp = new ServerApp();
        expect( serverapp ).toBeInstanceOf(ServerApp);
        expect( typeof ServerApp.run ).toBe('function');
    });

    test('Should run ServerApp with options', () => {

        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.run(options);

        expect( logSpy ).toHaveBeenCalledTimes(2);
        expect( logSpy ).toHaveBeenCalledWith('Server running...');
        expect( logSpy ).toHaveBeenLastCalledWith('File created!');
        expect( createTableSpy ).toHaveBeenCalledWith({
            base: options.base, limit: options.limit
        });
        expect( saveFileSpy ).toHaveBeenCalledTimes(1);
        expect( saveFileSpy ).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.destination,
            filename: options.name,
        });


    })
})