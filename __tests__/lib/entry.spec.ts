import Entry from '../../src/lib/entry';

describe('Entry', () => {
    it('creates instance', () => {
        const name = 'README.md';
        const oid = '123456';

        const entry = new Entry(name, oid)

        expect(entry).toBeInstanceOf(Entry)
        expect(entry.name).toEqual(name)
        expect(entry.oid).toEqual(oid)
    })
})
