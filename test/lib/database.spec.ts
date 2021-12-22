import Database from '../../src/lib/database';

describe('Database', () => {
    it('creates instance', () => {
        const database = new Database()

        expect(database).toBeInstanceOf(Database)
    })
})
