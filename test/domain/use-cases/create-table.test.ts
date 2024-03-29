import { CreateTable } from '../../../src/domain/use-cases/create-table.usecase';

describe('CreateTableUseCase', () => {

    it('should create table with default values', () => {
        const createTable = new CreateTable();

        const table = createTable.execute({base: 1});
        const rows = table.split('\n').length;
        //console.log(table)

        expect( createTable ).toBeInstanceOf(CreateTable);
        expect( table ).toContain('1 x 1 = 1');
        expect( table ).toContain('1 x 10 = 10');
        expect( rows ).toBe(10);
    })

    it('should create table with custom values', () => {
        const options = {
            base: 3,
            limit: 20
        }

        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        //console.log(table)

        expect( rows ).toBe(options.limit);
        expect( table ).toContain('3 x 5 = 15')
        expect( table ).toContain('3 x 10 = 30')
        expect( table ).toContain('3 x 20 = 60')
        
    })

})