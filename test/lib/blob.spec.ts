import Blob from '../../src/lib/blob';

describe('Blob', () => {
    it('creates instance', () => {
        const blob = new Blob()

        expect(blob).toBeInstanceOf(Blob)
    })
})
