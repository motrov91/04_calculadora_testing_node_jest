import { CreateTable } from '../../../src/domain/use-cases/create-table.usecase'

describe('CreateTableUseCase', () => {

    it('should create table with default values', () => {

        const createTable = new CreateTable();

        expect(createTable).toBeInstanceOf(CreateTable);
    })
})