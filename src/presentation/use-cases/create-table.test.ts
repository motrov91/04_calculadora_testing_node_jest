import { CreateTable } from '../../domain/use-cases/create-table.usecase';

describe('CreateTableUseCase', () => {

    it('should create table with default values', () => {
        
        const createTable = new CreateTable();

        const table = createTable.execute({base: 1});
        const rows = table.split('\n').length;
        console.log(table)

        expect( createTable ).toBeInstanceOf(CreateTable);
        expect( table ).toContain('1 x 1 = 1');
        expect( table ).toContain('1 x 10 = 10');
        expect( rows ).toBe(10);

    })

})