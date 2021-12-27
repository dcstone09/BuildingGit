import mock from 'mock-fs';
import { existsSync } from 'fs';
import Blob from '../../src/lib/blob';
import Database from '../../src/lib/database';

describe('Database', () => {
    beforeEach(() => {
        mock({})
    })

    afterEach(mock.restore)

    it('creates instance', () => {
        const cwd = process.cwd()

        const database = new Database(cwd)

        expect(database).toBeInstanceOf(Database)
    })

    it('store', async () => {
        const cwd = process.cwd()
        const database = new Database(cwd)
        const blob = new Blob('blob data')

        await database.store(blob)

        expect(existsSync(`${cwd}/24`)).toBeTruthy()
        expect(existsSync(`${cwd}/24/7b0b14ca2611000f89bcb433b5ebc066eaa9eb`)).toBeTruthy()
    })
})
