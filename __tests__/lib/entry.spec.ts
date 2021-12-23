import Entry from '../../src/lib/entry';

describe('Entry', () => {
    it('creates instance', () => {
        const entry = new Entry()

        expect(entry).toBeInstanceOf(Entry)
    })
})
