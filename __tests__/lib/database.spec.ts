import Blob from '../../src/lib/blob';
import Database from '../../src/lib/database';

describe('Database', () => {
    it('creates instance', () => {
        const cwd = process.cwd()

        const database = new Database(cwd)

        expect(database).toBeInstanceOf(Database)
    })

    it('store', () => {
        const cwd = process.cwd()
        const database = new Database(cwd)

        const blob = new Blob('blob data')

        database.store(blob)

        expect(database).toBeInstanceOf(Database)
    })
})
